import axios from "axios"

export interface Guild {
    id?: number
    name: string,
    avatar?: string,
    online?: number,
    about?: string
}

// Temporary plug under the API
export const getDiscordServerList = (link: string): Guild[] => {
    const ServerList: Guild[] = []
    for (let i = 1; i < 12; i++) ServerList.push({ name: "[YWS] Культ личности Ларки, топ " + i })  
    return ServerList
}