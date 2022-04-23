import { useEffect, useState } from 'react'
import s from './ServerItem.module.css'

interface ServerItemProps {
    ms?: number
    server?: {
        id: number
        name: string
        avatar: string
        members: number
        online: number
        about: string
    }
}

function ServerItem({ ms, server }: ServerItemProps) {
    const [isAnimate, setAnimate] = useState(false)

    const AnimateStyles = () => isAnimate === true ? s["ServerItem-Visible"] : s['ServerItem-UnVisible']

    useEffect(() => {
        if (isAnimate === false) {
            setTimeout(() => {
                setAnimate(true)
            }, ms ? ms : 100)
        }
    }, [ms, isAnimate])

    return <div className={`${s.ServerItemWrapper} ${AnimateStyles()}`}>
        <div className={s.ServerItem}>
            <div className={s.Content}>
                <div className={s.LeftPanelWrapper}>
                    <img className={s.Avatar} src="https://cdn.discordapp.com/attachments/915352648448897034/955865729138315305/57518400d12b7771.png" alt=''></img>
                    <div className={s.OnlineWrapper}>
                        <div className={s.Pulse}></div>
                        <p className={s.Counter}>7893</p>
                    </div>
                </div>
                <div className={s.BodyWrapper}>
                    <div className={s.Title}>ShowMeLove'ский городок</div>
                    <div className={s.About}>Сервер для общения и игр, как и любой другой сервер. У нас нет конкретной тематики, мы не привязываемся к чему-то одному, поэтому у нас стоит остаться - мы все широко мыслим ( ͡° ͜ʖ ͡°)</div>
                </div>
            </div>
            <div className={s.Button}>
                <button></button>
            </div>
        </div>
    </div>
}

export default ServerItem