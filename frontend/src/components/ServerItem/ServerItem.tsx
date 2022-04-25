import { useEffect, useState } from 'react'
import { Guild } from '../../types/Guild'
import s from './ServerItem.module.css'

type Props = {
    ms?: number
    guild: Guild
}

//TODO: refactor 
function ServerItem(props: Props) {
    const [isAnimate, setAnimate] = useState(false)

    const AnimateStyles = () => isAnimate === true ? s["ServerItem-Visible"] : s['ServerItem-UnVisible']

    useEffect(() => {
        if (isAnimate === false) {
            setTimeout(() => {
                setAnimate(true)
            }, props.ms ? props.ms : 100)
        }
    }, [props.ms, isAnimate])

    return <div className={`${s.ServerItemWrapper} ${AnimateStyles()}`}>
        <div className={s.ServerItem}>
            <div className={s.Content}>
                <div className={s.LeftPanelWrapper}>
                    <img className={s.Avatar} src={props.guild.avatar ? props.guild.avatar : "https://cdn.discordapp.com/attachments/915352648448897034/955865729138315305/57518400d12b7771.png"} alt=''></img>
                    <div className={s.OnlineWrapper}>
                        <div className={s.Pulse}></div>
                        <p className={s.Counter}>{props.guild.online}/${props.guild.offline}</p>
                    </div>
                </div>
                <div className={s.BodyWrapper}>
                    <div className={s.Title}>{props.guild.name || "Error"}</div>
                    <div className={s.About}>{props.guild.description || "Error"}</div>
                </div>
            </div>
            <div className={s.Button}>
                <button></button>
            </div>
        </div>
    </div>
}

export default ServerItem