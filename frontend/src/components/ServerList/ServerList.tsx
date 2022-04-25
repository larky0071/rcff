import { Guild } from '../../types/Guild'
import ServerItem from '../ServerItem/ServerItem'
import s from './ServerList.module.css'

type Props = { guilds: Guild[] }

//TODO: refactor
function ServerList(props: Props) {
    return <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(3, 1fr)`
    }} className={s.ServerList}>
        {props.guilds.map((guild: Guild) => <ServerItem ms={150} guild={guild} />)}
    </div>
}

export default ServerList