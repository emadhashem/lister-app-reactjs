import React from 'react'
import './btnstyles.css'
function CommonBtn({backGroundclassName, Icon = () => null, btnName}) {
    return (
        <div className = {`btn__conatiner ${backGroundclassName}` } >
            <input type = "button" value = {btnName} className = "btn__" />
            {Icon()}
        </div>
    )
}

export default CommonBtn
