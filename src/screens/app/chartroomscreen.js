import React from 'react'
import { useParams } from 'react-router'
import ChatRoomComp from '../../components/app/chat/ChatRoomComp'

function Chartroomscreen() {
    const {iduser} = useParams()
    return (
        <ChatRoomComp iduser = {iduser} />
    )
}

export default Chartroomscreen
