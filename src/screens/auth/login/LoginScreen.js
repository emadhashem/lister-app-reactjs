import React from 'react'
import LoginComp from '../../../components/auth/login/LoginComp'
import './loginstyles.css'
function LoginScreen({getTheUserId}) {
    return (
        <LoginComp getTheUserId = {getTheUserId} />
    )
}

export default LoginScreen
