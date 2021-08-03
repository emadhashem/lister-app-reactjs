import InputComp from '../Input'
import React, { useState } from 'react'
import './logincompstyles.css'
function LoginComp() {
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    async function handleSubmit(e) {
        e.preventDefault()
        alert(email)
    }

    return (
        <div className="login__container" >
            <form onSubmit={handleSubmit} >
                <InputComp value={email} type="email"
                    onTextChange={(ev) => setemail(ev.target.value)} />
                <InputComp value={pass} type="password"
                    onTextChange={(ev) => setpass(ev.target.value)} />
            </form>
        </div>
    )
}

export default LoginComp
