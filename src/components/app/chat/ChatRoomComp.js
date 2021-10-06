import React from 'react'
import { getAllMsgs } from '../../../server/chat'
import { socket as io } from '../../../server/socket'
import { connect } from 'react-redux'
function ChatRoomComp({ iduser }) {
    // useEffect(() => {

    //     (async () => {
    //         io.emit("join", { name: user.name, room: 'test', id: user.id })
    //     })()

    //     return () => {
    //         io.off()
    //     }
    // }, [])
    // useEffect(() => {
    //     io.on('recive_message', (userId, text) => {

    //     })
    //     io.on('error_msg', (text) => {

    //     })
    // }, [])
    // function sendMessage() {
    //     io.emit('send_message', txtMessage, user.id, 'test')
    // }
    return (
        <div>

        </div>
    )
}
const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps)(ChatRoomComp)
