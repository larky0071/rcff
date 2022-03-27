import { createRef, useEffect, useState } from 'react'
import { getDiscordServerList, Guild } from './api/getDiscordServerList'
import { Button } from './UI/button/Button'
import s from './Discord.module.css'
import { useContainerDimensions } from './hooks/useContainerDimensions'
import ServerList from './components/ServerList/ServerList'
import ServerItem from './components/ServerItem/ServerItem'
import Header from './components/Header/Header'
import InfoPanel from './components/InfoPanel/InfoPanel'



function Discord() {
  const ServerListWrapperRef: any = createRef()

  // Temporary data
  // make download from server
  let DiscordServerList: Guild[] = getDiscordServerList('')

  return <div>
    <Header />
    <InfoPanel />
    <ServerList data={DiscordServerList} cols={3}>
      <ServerItem />
    </ServerList>
    {/* <div style={{ height: document.body.offsetHeight - 150 + 380 + 'px' }} className={s.ListWrapper} ref={ServerListWrapperRef}>
      <ServerList data={DiscordServerList} parent={ServerListWrapperRef} parentMargin={64} />
    </div> */}
  </div >
}



// interface ServerListProps { data: Guild[], parent: any, parentMargin: number }

// function ServerList(props: ServerListProps) {
//   const rowWidth = 562
//   const { width } = useContainerDimensions(props.parent)
//   const col = Number(String((width - props.parentMargin) / rowWidth)[0])
//   const row = Math.ceil(props.data.length / col)

//   console.log('width:', width + `(${(width - props.parentMargin) / rowWidth})` + 'px', ' | col:', col, ' | row:', row) //debug info

//   let array: any[] = []
//   for (let i = 0; i < Math.ceil(props.data.length / row); i++) array[i] = props.data.slice((i * row), (i * row) + row)

//   return <div style={{
//     display: 'grid',
//     gridTemplateColumns: `repeat(${col}, 1fr)`
//   }} className={s.ServerList}>
//     {
//       array.map((list: Guild[], col: any) => <div key={col} className={s.Row} style={{
//         display: 'grid',
//         gridTemplateRows: `repeat(${array[0].length}, 1fr)`,
//       }}>
//         {
//           list.map((server: Guild, row: any) =>
//             <ServerItem key={row} title={server.name} ms={150 * col + 150 * row} />
//           )
//         }
//       </div>)
//     }
//   </div>
// }



// interface ServerItemProps { title: string, avatar?: string, members?: number, online?: number, ms?: number, callback?(value: string): void }

// function ServerItem(props: ServerItemProps) {
//   const [isAnimate, setAnimate] = useState(false)
//   const ServerItemRef: any = createRef()

//   const AnimateStyles = () => isAnimate === true ? s["ServerItem-Visible"] : s['ServerItem-UnVisible']

//   useEffect(() => {
//     if (isAnimate === false) {
//       setTimeout(() => {
//         setAnimate(true)
//       }, props.ms ? props.ms : 100)
//     }
//   }, [props, isAnimate])

//   return <div className={`${s.ServerItem} ${AnimateStyles()}`} ref={ServerItemRef}>
//     <div className={`${s.Panel} ${s.ServerItemContentWrapper}`}>
//       <div className={s.AvatarAndOnlineWrapper}>
//         <img className={s.ServerItemAvatar} src="https://cdn.discordapp.com/attachments/915352648448897034/955865729138315305/57518400d12b7771.png"></img>
//         <div className={s.OnlineCounterContainer}>
//           <div className={s.Pulse}></div>
//           <p className={s.Counter}>7893</p>
//         </div>
//       </div>
//       <div className={s.NameAndAboutWrapper}>
//         <p className={s.ServerItemName}>{props.title}</p>
//         <p className={s.ServerItemAbout}>Задача орга жеющийны консультация консультация консультация консультация с широким активом требуют от нас аусловий. </p>
//       </div>
//     </div>
//     <div className={`${s.Panel} ${s.ServerItemBtnWrapper}`}>
//       <button className={s.ServerItemBtn}></button>
//     </div>
//   </div>
// }


{/* <div className={s.ServerNameWrapper}>
      <img src="https://cdn.discordapp.com/attachments/915352648448897034/955865729138315305/57518400d12b7771.png" alt="" className={s.ServerAvatar}></img>
      <p className={s.ServerName}>{props.title}</p>
    </div>
    <div>
      <button className={s.ServerBtn}>Copy Link</button>
    </div> */}

function SelectComponent(props: any) {
  return <div className={s.SelectComponent}>
    <input placeholder='Поиск сервера - Просто напиши'></input>
  </div>
}
// <Item title={element} ms={(50 * col) * 2 + 50 * row} cb={serverChange} />




export default Discord;





// //fix viewport height for mobile browsers 
  // const FixMobileBrowser = () => {
  //   let vh = window.innerHeight * 0.01
  //   document.documentElement.style.setProperty("--vh", `${vh}px`)
  // }

// useEffect(() => {
  //   FixMobileBrowser()
  // }, [])