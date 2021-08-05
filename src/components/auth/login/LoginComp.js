import InputComp from '../Input'
import React, { useState } from 'react'
import './logincompstyles.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CommonBtn from '../../commonBtn/CommonBtn';
import LockIcon from '@material-ui/icons/Lock';
import { login_user } from '../../../server/auth';
function LoginComp() {
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    async function handleSubmit(e) {
        e.preventDefault()
        await login()

    }
    async function login() {
        try {
            const res = await login_user(email, pass)
            console.log(res)
            return res
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className="login__container background__class" >
            <form className="form__" onSubmit={handleSubmit} >
                <InputComp value={email} type="email"
                    onTextChange={(ev) => setemail(ev.target.value)}
                    Icon={() => <PermIdentityIcon />}
                />
                <InputComp value={pass} type="password"
                    onTextChange={(ev) => setpass(ev.target.value)}
                    Icon={() => <LockIcon />}
                />
                <CommonBtn onclick={handleSubmit} backGroundclassName="background__class"
                    btnName="Login" />
            </form>
        </div>
    )
}

export default LoginComp
