import React, { useState } from 'react'
import CommonBtn from '../../commonBtn/CommonBtn'
import InputComp from '../Input'
import '../login/logincompstyles.css'
import PersonPinIcon from '@material-ui/icons/PersonPin';
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import { create_user } from '../../../server/auth';
function SignUpComp({ getTheUserId }) {
    const [email, setemail] = useState("")
    const [fName, setfName] = useState("")
    const [lName, setlName] = useState("")
    const [pass, setpass] = useState("")
    async function handleSubmit(e) {
        e.preventDefault()
        const uid = await signUp()
        getTheUserId(uid)

    }
    async function signUp() {
        try {
            const res = await create_user(email, pass)
            return res
        } catch (error) {
            alert(error.message)
            return null

        }
    }
    return (
        <div className="login__container background__class"  >
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
                <CommonBtn onclick={handleSubmit} btnName="SignUp" backGroundclassName="background__class" />
            </form>
        </div>
    )
}

export default SignUpComp
