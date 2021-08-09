import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { logout_user } from '../../../server/auth'
import './header.css'
import {action_set_user_id} from '../../../redux/actions/userActions'
import OptionsComp from './OptionsComp'
import { useHistory } from 'react-router-dom'
import SearchComp from './SearchComp'
function Header({ common }) {
    const [headerState, setheaderState] = useState(false)
    const go = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        includes__word(common.path, "member")
    }, [common.path])
    function includes__word(path__url = "", word = "") {
        setheaderState(path__url.includes(word))
    }
    async function handleLogOut() {
        const res = await logout_user()
        dispatch(action_set_user_id(null))
        go.push("/auth/login")
    }
    function handleGoToHome() {
        if(headerState) go.push("/member/home")
    }
    return (
        <div className="header__container background__color">
            {(headerState) && <SearchComp />}
            <p onClick = {handleGoToHome} >Lister App</p> 
            {(headerState) && <OptionsComp onLogOut = {handleLogOut} />}
        </div>
    )
}
const mapStateToProps = ({ common }) => ({ common })
export default connect(mapStateToProps)(Header)
