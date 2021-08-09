import React from 'react'
function OptionComp({icon, onClick}) {
    return (
        <div onClick = {onClick} className = "icon__conatiner" >
            {icon()}
        </div>
    )
}

export default OptionComp
