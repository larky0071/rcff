import { getDiscordServerList, Guild } from '../../api/getDiscordServerList'
import ServerList from '../../components/ServerList/ServerList'
import ServerItem from '../../components/ServerItem/ServerItem'
import Header from '../../components/Header/Header'
import InfoPanel from '../../components/InfoPanel/InfoPanel'
import s from './Discord.module.css'

function Discord() {
  // Temporary data
  // make download from server
  let DiscordServerList: Guild[] = getDiscordServerList('')

  return <div className={s.Page}>
    <Header />
    <InfoPanel />
    <ServerList data={DiscordServerList} cols={3}>
      <ServerItem />
    </ServerList>
  </div >
}

export default Discord;