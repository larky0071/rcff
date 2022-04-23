import { Box, Tab, TextField, ThemeProvider, createTheme, Button } from '@mui/material'
import { TabContext, TabPanel, TabList } from '@mui/lab';
import s from './Add.module.css'
import { useState } from 'react';

function Add() {
    const [currentTab, setCurrentTab] = useState("discord")
    const [SRVID, setSRVID] = useState("")
    const [SRVLink, setSRVLink] = useState("")
    const [SRVAbout, setSRVAbout] = useState("Write us anything about your server")

    const changeSRVID = (e: any) => setSRVID(e.target.value)
    const changeSRVLink = (e: any) => setSRVLink(e.target.value)
    const changeSRVAbout = (e: any) => setSRVAbout(e.target.value)

    const validSRVID = () => {
        if (SRVID !== "" || SRVID.match(/[a-zA-ZА-Яа-я]/g) || SRVID.length !== 18) return false
        return true
    }

    const theme = createTheme({
        palette: { mode: "dark" }
    });

    return <div className={s.Page}>
        <div className={s.PageContentWrapper}>
            <div className={s.Header}>
                <h1 className={s.Title}>Заявка на добавление</h1>
                <p className={s.SubTitle}>дискорд сервера / ютуб канала</p>
            </div>

            <div className={s.Content}>
                <ThemeProvider theme={theme}>
                    <TabContext value={currentTab}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList>
                                <Tab label="Discord" value="discord" onClick={() => setCurrentTab('discord')} />
                                <Tab label="Youtube" value="youtube" onClick={() => setCurrentTab('youtube')} />
                            </TabList>
                        </Box>
                        <TabPanel value="discord">
                            <div className={`${s.Tab} ${s.Discord}`}>
                                <div className={s.Row}>
                                    <TextField className={s.Row} error={!validSRVID()} label="Server ID (match 0-9, 18 characters)" variant="outlined" size='small' value={SRVID} onChange={changeSRVID} />
                                </div>
                                <div className={s.Row}>
                                    <TextField className={s.Row} label="Invite Link (example: https://discord.gg/r97sCPz)" variant="outlined" size='small' value={SRVLink} onChange={changeSRVLink} />
                                </div>
                                <div className={s.Row}>
                                    <TextField className={s.Row} variant='outlined' label="About Server" multiline rows={4} value={SRVAbout} onChange={changeSRVAbout} />
                                </div>
                                <Button variant="outlined">Отправить заявку</Button>
                            </div>

                        </TabPanel>
                        <TabPanel value="youtube">
                            <div className={s.Tab}>
                                <p>Adding YouTube channels currently disabled.</p>
                            </div>
                        </TabPanel>
                    </TabContext>
                </ThemeProvider>
            </div>
        </div>
    </div>
}

export default Add