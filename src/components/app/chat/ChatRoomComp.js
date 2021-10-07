import React, { useState, useEffect, useRef } from 'react'
import { getAllMsgs } from '../../../server/chat'
import { socket as io } from '../../../server/socket'
import { connect } from 'react-redux'
import { getThread } from '../../../utilities/commons'
import SendIcon from '@mui/icons-material/Send';
import './chatroomcompstyles.scss'
import { Avatar, IconButton } from '@mui/material'
import { v4 } from 'uuid'
import MessageComp from './MessageComp'
import { useLocation, useRouteMatch } from 'react-router'
function ChatRoomComp({ iduser, user  }) {
    const [roomName, setroomName] = useState(getThread(iduser, user.id))
    const [msgTxt, setmsgTxt] = useState('')
    const [roommsgs, setroomMsgs] = useState([])
    useEffect(() => {
        (async () => {
            io.emit("join", {
                name: user.name, room: getThread(iduser, user.id),
                id: user.id
            })
            await getTheMsgs()
        })()
        return () => {
            io.off()
        }
    }, [])
    useEffect(() => {
        io.on('recive_message', (sender, text) => {
            const newMsg = {
                date: new Date(),
                _id: v4(),
                text,
                sender: sender,
            }
            
            setroomMsgs((arr) => [...arr, { ...newMsg }])
            scrollToButtom()
        })
        io.on('error_msg', (text) => {

        })
    }, [])

    async function getTheMsgs() {
        try {
            const res = await getAllMsgs(roomName)
            setroomMsgs(res.data.msgs)
            scrollToButtom()
            
        } catch (error) {
            alert(error.message)
        }
    }
    function sendMessage(e) {
        e.preventDefault()
        io.emit('send_message', msgTxt, user.id, roomName)
        setmsgTxt('')

    }
    const boxRef = useRef(null)
    function scrollToButtom() {
        document.querySelector('.messages__').
        scrollTop = document.querySelector('.messages__').scrollHeight
    }
    const {username, userImg} = useLocation().state;
    return (
        <div className="roomcontainer__" >
            <div className="header__" >
                <Avatar src = {userImg} sx={{ width: 50, height: 50 }} />
                <p>{username}</p>
            </div>
            <div className="messages__" ref={boxRef} >
                {
                    roommsgs.map(item => (
                        <MessageComp {...item} left={(user.id == item.sender)} />
                    ))
                }
                
            </div>
            <form className="inputmsg__" onSubmit={sendMessage} >
                <input value={msgTxt} onChange={ev => setmsgTxt(ev.target.value)}

                />
                <IconButton onClick={sendMessage} >
                    <SendIcon />
                </IconButton>
            </form>

        </div>
    )
}
const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps)(ChatRoomComp)
