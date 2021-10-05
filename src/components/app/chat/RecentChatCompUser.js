import { Avatar, CircularProgress } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { downloadImg } from '../../../server/storageFirebase'
import { get_the_user_data } from '../../../server/user'
import './recentchatusercompstyles.scss'
function RecentChatCompUser({ userId = '' }) {
    const go = useHistory()

    const [usrName, setusrName] = useState('')
    const [usrImg, setusrImg] = useState('')
    const [loading, setloading] = useState(false)
    useEffect(() => {
        (async () => {
            setloading(true)
            await getUserData()
            await getUserImg()
            setloading(false)
        })()
    }, [])
    async function getUserData() {
        const res = await get_the_user_data(userId)
        setusrName(res.fName + " " + res.lName)
    }
    async function getUserImg() {
        const url = await downloadImg(`imgs/${userId}`)
        setusrImg(url)
    }
    async function handleGoToChat() {
        go.push('/member/chat/room/' + userId)
    }
    return (
        <div className="chat__" onClick={handleGoToChat} >
            {(loading == false) ? <div>
                <Avatar src={usrImg} sx={{ width: 70, height: 70 }} />
                <h3>{usrName}</h3>
            </div> : <CircularProgress color="info" />

            }
        </div>
    )
}

export default RecentChatCompUser
