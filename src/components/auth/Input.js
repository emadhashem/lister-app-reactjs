import React from 'react'
import './input.css'
function InputComp({ type = "email", value, onTextChange = f => f, Icon = () => null }) {
    return (
        <div className = "input__conatiner" >
            {Icon()}
            <input className="input__txt"
                value={value}
                placeholder = {type}
                type={type} onChange={onTextChange} />


        </div>

    )
}

export default InputComp
