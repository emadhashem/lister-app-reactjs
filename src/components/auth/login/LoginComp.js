import InputComp from '../Input'
import React, { useState } from 'react'
import './logincompstyles.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CommonBtn from '../../commonBtn/CommonBtn';
import LockIcon from '@material-ui/icons/Lock';
import { login_user } from '../../../server/auth';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { get_the_user_data } from '../../../server/user';

function LoginComp({ getTheUserId }) {
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [loading, setloading] = useState(false)
    const go = useHistory()
    async function handleSubmit(e) {
        setloading(true)
        e.preventDefault()
        const uid = await login()
        if (!uid) {
            setloading(false);
            return
        }
        const userData = await get_the_user_data(uid)
        getTheUserId(uid)
        go.push("/member/home")
        setloading(false)
        console.log(userData)
    }
    async function login() {
        try {
            const res = await login_user(email, pass)
            return res
        } catch (error) {
            alert(error.message)
            return null
        }
    }
    return (
        <div className="login__container background__class" >
            {
                (loading) ? (
                    <CircularProgress />

                ) : (
                    <form className="form__" onSubmit={handleSubmit} >
                        <InputComp value={email} type="email"
                            onTextChange={(ev) => setemail(ev.target.value)}
                            Icon={() => <PermIdentityIcon />}
                        />
                        <InputComp value={pass} type="password"
                            onTextChange={(ev) => setpass(ev.target.value)}
                            Icon={() => <LockIcon />}
                        />
                        <div className="btns__holder" >
                            <CommonBtn onclick={handleSubmit} backGroundclassName="background__class"
                                btnName="Login" />
                            <CommonBtn onclick={() => go.push('/auth/signup')} backGroundclassName="background__class"
                                btnName="Create New Acount :)" />
                        </div>
                    </form>
                )
            }

        </div >
    )
}

export default LoginComp
