import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { socket as io } from '../../../server/socket'
function ChatComp({user}) {
    const [newMeassge, setnewMeassge] = useState('')
    const [txtMessage, settxtMessage] = useState('')
    useEffect(() => {
        io.emit("join", {name : user.name, room : 'test', id : user.id})
        return () => {
            io.off()
        }
    }, [])
    useEffect(() => {
        io.on('recive_message', (userId, text) => {
            console.log(text)
            setnewMeassge(text)
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
        </div>
    )
}
const mapsateToProps = ({user}) => ({user})
export default connect(mapsateToProps)(ChatComp)
