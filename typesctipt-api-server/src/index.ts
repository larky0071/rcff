const PORT: number = 8081

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
    name: string
    avatar: string
    banner: string
    online: number
    offline: number
    invite: string
    description: string

    constructor(id: number, invite: string, description: string) {
        if (!id || !invite || !description) throw Error("'id', 'invite' or 'description' cannot be 'null'")
        this.id = id
        this.invite = invite
        this.description = description
    }
}

class DataBase {
    Guilds: Array<Guild>

    public returnAllData() {
        return { 'GuildCollection': this.Guilds }
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

import express from 'express'
const app = express()

const db = new DataBase()

//TODO: CHANGE 'GET' TO 'POST' IF NEEDED
//TODO: FIX TYPES FOR 'req', 'res' to change 'any' => 'express.Request', 'express.Response'

//todo: add validation when connect to mysql
app.post('/api/list/accept', (req: express.Request, res: express.Response) => {
    res.send(db.returnAllData())
})

//todo: add validation when connect to mysql
app.post('/api/list/checking', (req: any, res: any) => {
    res.send(db.returnAllData())
})

//todo: rework to open api docs
app.all('/api', (req: any, res: any) => {
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

app.listen(PORT)