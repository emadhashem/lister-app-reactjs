import React from 'react'
import './input.css'
function InputComp({type = "email", value, onTextChange = f => f}) {
    return (
        <input value = {value} type = {type} onChange = {onTextChange}/>
    )
}

export default InputComp
