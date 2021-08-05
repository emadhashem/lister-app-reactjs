import React from 'react'
import './btnstyles.css'
function CommonBtn({backGroundclassName, Icon = () => null, btnName, onclick = f => f}) {
    return (
        <div className = {`btn__conatiner ${backGroundclassName}` } >
            <input onClick = {onclick} type = "button" value = {btnName} className = "btn__" />
            {Icon()}
        </div>
    )
}

export default CommonBtn
