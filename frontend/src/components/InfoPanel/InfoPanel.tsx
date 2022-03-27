import s from './InfoPanel.module.css'

function InfoPanel() {
    return <div className={s.InfoPanel}>
        <div className={s.InfoWrapper}>
            <h2>Список фурри дискорд серверов</h2>
            <div className={s.sp}></div>
            <p>Собрание РУ язычных фурри серверов</p>
        </div>
        <div className={s.StatWrapper}>
            <p><span>1167</span> - Серверов | <span>15367</span> - Участников</p>
        </div>
    </div>
}

export default InfoPanel