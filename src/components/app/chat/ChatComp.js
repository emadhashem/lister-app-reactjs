import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getAllChats } from '../../../server/chat'
import './chatstyles.scss'
function ChatComp({ user }) {
    const [chats, setchats] = useState([])
    useEffect(() => {
        (async () => {
            await getTheChats()
        })()
    }, [])

    async function getTheChats() {
        try {
            const res = await getAllChats(user.id)
            setchats(res.data.chaters)
        } catch (error) {
            alert('please wait there is kind of bug')
        }
    }

    return (
        <div className = "chats__container" >
            <h1 className = "title__" >
                Recent Chats
            </h1>
            <div className = "chats__" >
                
            </div>
        </div>
    )
}
const mapstateToProps = ({ user }) => ({ user })
export default connect(mapstateToProps)(ChatComp)
