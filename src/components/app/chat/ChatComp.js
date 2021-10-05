import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getAllChats } from '../../../server/chat'
import './chatstyles.scss'
import RecentChatCompUser from './RecentChatCompUser'

const tstUser = 'rMvSJOCOxxf6s54lHD9vFZK0sll2'
function ChatComp({ user }) {
    const [chats, setchats] = useState(Array(20).fill(tstUser))
    const [loadingChats, setloadingChats] = useState(false)
    useEffect(() => {
        (async () => {
            setloadingChats(true)
            await getTheChats()
            setloadingChats(false)
            
        })()
    }, [])

    async function getTheChats() {
        try {
            const res = await getAllChats(user.id)
            // setchats(res.data.chaters)
        } catch (error) {
            alert('please wait there is kind of bug')
        }
    }

    return (
        <div className = "chats__container" >
            <h1 className = "title__" >
                Recent Chats
            </h1>
            {(loadingChats == false) ? <div className = "chats__" >
                {
                    [...chats].map((item) => (
                        <RecentChatCompUser key = {Math.random() * 100} userId = {item} />
                        
                    ))
                }
            </div> : <div style = {{width : 'auto', margin : 'auto', height : 'auto'}} >
                <CircularProgress color = "info" />
            </div>
            
        }
        </div>
    )
}
const mapstateToProps = ({ user }) => ({ user })
export default connect(mapstateToProps)(ChatComp)
