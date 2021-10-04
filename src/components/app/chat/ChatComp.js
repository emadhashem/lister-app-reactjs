import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getAllMsgs } from '../../../server/chat'
import { socket as io } from '../../../server/socket'
function ChatComp({user}) {
    const [newMeassge, setnewMeassge] = useState('')
    const [errMsg, seterrMsg] = useState('')
    const [txtMessage, settxtMessage] = useState('')
    useEffect(() => {
        
        (async () => {
            io.emit("join", {name : user.name, room : 'test', id : user.id})
            const res = await getAllMsgs("test")
            console.log(res)
        })()
        
        return () => {
            io.off()
        }
    }, [])
    useEffect(() => {
        io.on('recive_message', (userId, text) => {
            setnewMeassge(text )
        } )
        io.on('error_msg', ( text) => {
            seterrMsg(text )
        } )
    }, [])
    function sendMessage() {
        io.emit('send_message', txtMessage, user.id, 'test')
    }
    return (
        <div>
            <input type="text" value={txtMessage}
                onChange={ev => settxtMessage(ev.target.value)} />
            <input type="button" value="send" onClick = {sendMessage} />
            <div>{newMeassge}</div>
            <div>{errMsg}</div>
        </div>
    )
}
const mapsateToProps = ({user}) => ({user})
export default connect(mapsateToProps)(ChatComp)
