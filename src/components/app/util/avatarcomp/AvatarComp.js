import React from 'react'
import './avatarcompstyles.scss'
function AvatarComp({imgSize = '50%', src}) {
    return (
        <img src = {src} 
        className = "avatar__img" 
        style = {{width : imgSize, height : imgSize}} />
    )
}

export default AvatarComp
