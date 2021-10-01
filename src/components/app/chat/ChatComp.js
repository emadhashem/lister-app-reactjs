import React, { useEffect } from 'react'
import {socket as io} from '../../../server/socket'
function ChatComp() {
    useEffect(() => {
        io.emit("message", "this new messge", 'obito is here ')
    }, [])
    return (
        <div>
            <input type = "text"  />
            <input type = "button" value = "send"  />
        </div>
    )
}

export default ChatComp
