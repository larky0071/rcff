import s from './InfoPanel.module.css'

function InfoPanel() {
    return <div className={s.InfoPanel}>
        <div className={s.InfoWrapper}>
            <h2>Список Discord-серверов по тематике фурри</h2>
            <div className={s.sp}></div>
            <p>Чтобы добавить свой сервер, нажмите на соответствующую кнопку для подачи анкеты, а также свяжитесь с нами в Discord: n2k#9665</p>
        </div>
        <div className={s.StatWrapper}>
            <p><span>1167</span> - Серверов | <span>15367</span> - Участников</p>
        </div>
    </div>
}

export default InfoPanel