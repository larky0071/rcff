import { Nullable } from "./Nullable"

export type Guild = {
    id: number
    name: string,
    avatar: Nullable<string>,
    online: Nullable<number>,
    offline: Nullable<number>
    description: Nullable<number>
}