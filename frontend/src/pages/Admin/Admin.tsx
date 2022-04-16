import { useAuth } from "../../hooks/useAuth";

export function Admin() {
    const [token, auth] = useAuth("https://larky.ru/api/auth/")

    if (!token) {
        const login = prompt("Login")
        const password = prompt('Password')
        auth(login, password)
    }
    return <p>auth true</p>
}