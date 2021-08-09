import React, { useState } from 'react'
import CommonBtn from '../../commonBtn/CommonBtn'
import InputComp from '../Input'
import '../login/logincompstyles.css'
import PersonPinIcon from '@material-ui/icons/PersonPin';
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import { create_user } from '../../../server/auth';
import { useHistory } from 'react-router-dom';
import { add_new_user } from '../../../server/user';
import { CircularProgress } from '@material-ui/core';
function SignUpComp({ getTheUserId }) {
    const [email, setemail] = useState("")
    const [fName, setfName] = useState("")
    const [lName, setlName] = useState("")
    const [pass, setpass] = useState("")
    const [loading, setloading] = useState(false)

    const go = useHistory()

    async function handleSubmit(e) {
        setloading(true)
        e.preventDefault()
        const uid = await signUp()
        getTheUserId(uid)

        setloading(false)
        go.push("/member/home")

    }
    async function signUp() {
        try {
            if (fName.length < 2 || lName.length < 2) return alert("please fix the names")
            const res = await create_user(email, pass)
            if (res) {
                const res2 = await add_new_user(fName, lName, email, res)

            }
            return res
        } catch (error) {
            alert(error.message)
            return null

        }
    }
    return (
        <div className="login__container background__class"  >
            {
                (loading) ? (
                    <CircularProgress />

                ) : (
                    <form className="form__" onSubmit={handleSubmit} >
                        <InputComp value={fName} type="text"
                            onTextChange={(ev) => setfName(ev.target.value)}
                            Icon={() => <PersonPinIcon fontSize="default" />}
                        />
                        <InputComp value={lName} type="text"
                            onTextChange={(ev) => setlName(ev.target.value)}
                            Icon={() => <PersonPinIcon fontSize="default" />}

                        />
                        <InputComp value={email} type="email"
                            onTextChange={(ev) => setemail(ev.target.value)}

                            Icon={() => <MailIcon fontSize="default" />}

                        />
                        <InputComp value={pass} type="password"
                            onTextChange={(ev) => setpass(ev.target.value)}
                            Icon={() => <LockIcon fontSize="default" />}

                        />
                        <div className="btns__holder" >
                            <CommonBtn onclick={handleSubmit}
                                btnName="SignUp"
                                backGroundclassName="background__class" />
                            <CommonBtn onclick={() => go.push('/auth/login')} backGroundclassName="background__class"
                                btnName="Already Have One :)" />
                        </div>

                    </form>
                )
            }

        </div>
    )
}

export default SignUpComp
