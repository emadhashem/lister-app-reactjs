import React from 'react'

function TodoComp({classNameExt, text}) {
    return (
        <div className = {classNameExt} >
            <p>{text}</p>
        </div>
    )
}

export default TodoComp
