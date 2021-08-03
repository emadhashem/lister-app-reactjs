import React, { useState } from 'react'
import InputComp from '../Input'
import './singupcompstyles.css'
function SignUpComp() {
    const [email, setemail] = useState("")
    const [fName, setfName] = useState("")
    const [lName, setlName] = useState("")

    const [pass, setpass] = useState("")
    async function handleSubmit(e) {
        e.preventDefault()
        
    }
    return (
        <div  >
            <form onSubmit={handleSubmit} >
                <InputComp value={fName} type="text"
                    onTextChange={(ev) => setfName(ev.target.value)} />
                <InputComp value={lName} type="text"
                    onTextChange={(ev) => setlName(ev.target.value)} />
                <InputComp value={email} type="email"
                    onTextChange={(ev) => setemail(ev.target.value)} />
                <InputComp value={pass} type="password"
                    onTextChange={(ev) => setpass(ev.target.value)} />
            </form>
        </div>
    )
}

export default SignUpComp
