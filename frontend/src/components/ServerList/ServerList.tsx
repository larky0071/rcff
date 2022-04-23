import ServerItem from '../ServerItem/ServerItem'
import s from './ServerList.module.css'

interface ServerListProps { cols: number, data: any[], children?: React.ReactNode }

function ServerList(props: ServerListProps) {

    let array: any[] = []
    for (let i = 0; i < Math.ceil(props.data.length / props.cols); i++) array[i] = props.data.slice((i * props.cols), (i * props.cols) + props.cols)

    console.log(array)

    return <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${props.cols}, 1fr)`
    }} className={s.ServerList}>
        {
            array.map((list: any[], col: any) => <div key={col} className={s.Row} style={{
                display: 'grid',
                gridTemplateRows: `repeat(${array[0].length}, 1fr)`,
            }}>
                {
                    list.map((server: any, row: any) =>
                        <ServerItem key={row} ms={150 * col + 150 * row} />
                    )
                }
            </div>)
        }
    </div>
}

export default ServerList