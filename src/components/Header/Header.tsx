import { Button } from '../../UI/button/Button'
import s from './Header.module.css'

function Header() {
    return <header className={s.Header}>
        <div className={s.LogoAndNavBarWrapper}>
            <div className={s.LogoWrapper}>
                <h1 className={s.Logo}>RCFF</h1>
            </div>
            <div className={s.NavBarWrapper}>
                <Button disable={false} size='large' type='primary'>Discord сервера</Button>
                <Button disable={true} size='large' type='primary'>YouTube каналы</Button>
            </div>
        </div>
        <div className={s.SpecialButtonWrapper}>
            <Button disable={false} size='large' type='submit'>Добавить</Button>
        </div>
    </header>
}

export default Header