import moment from 'moment'
import React from 'react'
import './messagecompstyles.scss'
function MessageComp({ text = "", _id = "", date = "", sender = "", left = false }) {
    return (
        <div className="message__"
            style={{ display: 'flex', 
            alignItems : (left == true) ? "flex-start" : "flex-end",
            flexDirection : 'column'
            }} >
            <p className="date__" >{moment(date).startOf('minutes').fromNow()}</p>
            <p className="msg__text" >
                {text} 
            </p>
        </div>
    )
}

export default MessageComp
