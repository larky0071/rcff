import ServerList from '../../components/ServerList/ServerList'
import Header from '../../components/Header/Header'
import InfoPanel from '../../components/InfoPanel/InfoPanel'
import s from './Discord.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Guild } from '../../types/Guild'

//TODO: refactor
function Discord() {
  const [guilds, setGuilds] = useState<Guild[]>([])

  useEffect(() => {
    if (guilds.length !== 0) return
    axios({
      'url': 'http://rcff.ru/api/list/accept',
      'method': 'POST'
    })
      .then(res => {
        console.log(res)
        setGuilds(res.data)
      })
  })

  return <div className={s.Page}>
    <Header />
    <InfoPanel />
    <ServerList guilds={guilds} />
  </div >
}

export default Discord;