import mysql from 'mysql2'
import express from 'express'
import colors from 'colors'

const config = require('./config.json')

type Nullable<T> = T | null

//todo: add custom types for collection of banner, avatar, members
interface IGuild {
    id: number //Primary key in db
    name: Nullable<string>
    avatar: Nullable<string>
    banner: Nullable<string>
    online: Nullable<number>
    offline: Nullable<number>
    invite: string
    description: string
}

class Guild implements IGuild {
    id: number
    name: Nullable<string> = null
    avatar: Nullable<string> = null
    banner: Nullable<string> = null
    online: Nullable<number> = null
    offline: Nullable<number> = null
    invite: string
    description: string

    constructor(id: number, invite: string, description: string) {
        if (!id || !invite || !description) throw Error("'id', 'invite' or 'description' cannot be 'null'")
        this.id = id
        this.invite = invite
        this.description = description
    }
}

class DatabaseManager {
    connection: mysql.Connection
    Guilds: Array<IGuild> = []

    constructor() {
        try {
            console.log("Trying connect database...")
            this.connection = mysql.createConnection(config.mysql)

            console.log(colors.green("Database connected!"))
            console.log("Search tables...")
            this.connection.execute(`SHOW TABLES LIKE '${"guilds"}'`, (err, result, field) => {
                if (Array.isArray(result) && result.length > 0) return console.log(colors.green("Table 'guilds' exist!"))
                console.log(colors.red("Can't find table 'guilds', creating..."))
                this.connection.execute('CREATE TABLE IF NOT EXISTS `guilds` (`id` INT NOT NULL, `name` TEXT, `avatar` TEXT, `banner` TEXT, `online` INT, `offline` INT, `invite` TEXT NOT NULL, `description` TEXT NOT NULL, PRIMARY KEY (`id`))', (err, result, field) => {
                    if (!err) console.log(colors.green("Table 'accepted' created!"))
                })
            })

            this.connection.execute(`SHOW TABLES LIKE '${"accepted"}'`, (err, result, field) => {
                if (Array.isArray(result) && result.length > 0) return console.log(colors.green("Table 'accepted' exist!"))
                console.log(colors.red("Can't find table 'accepted', creating..."))
                this.connection.execute('CREATE TABLE IF NOT EXISTS `accepted` (`id` INT NOT NULL, `accepted` BOOLEAN, PRIMARY KEY (`id`))', (err, result, field) => {
                    if (!err) console.log(colors.green("Table 'accepted' created!"))
                })
            })

        } catch (err) {
            throw Error(err)
        }
    }

    public returnAllData() {
        return {
            'GuildCollection': this.Guilds
        }
    }

    public newGuild(id: number, invite: string, description: string) {
        if (!id || !invite || !description) throw Error("'id', 'invite' or 'description' cannot be 'null'")
        this.Guilds.push(new Guild(id, invite, description))
    }

    //todo: add in 'field' only  can must IGuild params
    public modifyGuild(id: number, field: string, value: any) { // ! fix it! value has any type!!! 
        this.Guilds.forEach(guild => {
            if (guild.id === id) {
                if (!guild.hasOwnProperty(field)) throw Error(`'guild' object has not property '${field}'`)
                guild[field] = value
            }
        })
    }

}

const app = express()
const db = new DatabaseManager()

//TODO: CHANGE 'GET' TO 'POST' IF NEEDED
//TODO: FIX TYPES FOR 'req', 'res' to change 'any' => 'express.Request', 'express.Response'

//todo: rework to open api docs
app.all('/api', (req: any, res: any) => res.send({ 'API': db.returnAllData() }))

//todo: add validation when connect to mysql
app.post('/api/list/accept', (req: express.Request, res: express.Response) => {
    res.send(db.returnAllData())
})

//todo: add validation when connect to mysql
app.post('/api/list/checking', (req: any, res: any) => {
    res.send(db.returnAllData())
})

//todo: add query types condition
app.get('/api/new', (req: any, res: any) => {
    const { id, invite, description } = req.query
    if (!id || !invite || !description) return res.send(false)
    db.newGuild(id, invite, description)
    res.send(true)
})

//todo: add JWT authorization
app.post('/api/guild/modify', (req: any, res: any) => {
    const { id, field, value } = req.query
    if (!id || !field || !value) return res.send(false)
    db.modifyGuild(Number(id), String(field), value)
    res.send(true)
})

app.listen(8081, () => console.log("API server now listen on port", 8081))