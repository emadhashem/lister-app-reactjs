import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LoginComp from '../../../components/auth/login/LoginComp'
import './loginstyles.css'
function LoginScreen({ user, getTheUserId }) {
    const go = useHistory()
    useEffect(() => {
        if (user.id != null) go.push("/member/home")
    }, [])
    return (
        <LoginComp getTheUserId={getTheUserId} />
    )
}
const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps)(LoginScreen)
