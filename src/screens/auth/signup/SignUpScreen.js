import React from 'react'
import SignUpComp from '../../../components/auth/signup/SignUpComp'
import './signupstyles.css'
function SignUpScreen({getTheUserId}) {
    return (
        <SignUpComp  getTheUserId = {getTheUserId} />
    )
}

export default SignUpScreen
