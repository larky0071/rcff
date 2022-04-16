import { ok } from "assert"
import fetch from "node-fetch"
import { useState } from "react"

export const useAuth = (props: any): [token: string | null, authorization: (ogin: string | null, password: string | null) => void] => {

    const [JWT, setJWT] = useState('')

    const Authorization = async (login: string | null, password: string | null) => {

        if (!props.url) return

        console.log('trying to send POST request to', props.url) // ! delete this before git push after testing

        fetch(`${props.url}?login=${login}&password=${password}`)
            .then(async response => {
                const data: any = await response.json()

                if (!response.ok) Promise.reject((data && data.message) || response.statusText)

                setJWT(data.token)
            })
            .catch(error => {
                console.error('useAuth hook error:', error) // ! need delete on production
            })
    }

    return [JWT ? JWT : null, Authorization]
}