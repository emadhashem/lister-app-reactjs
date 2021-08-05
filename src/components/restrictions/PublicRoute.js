import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { action_set_cur_path } from '../../redux/actions/commonActions'
import { action_set_user_id } from '../../redux/actions/userActions'
function PublicRoute({ component: Component, ...rest }) {
    const dispatch = useDispatch()
    function get_the_user_id(id) {
        dispatch(action_set_user_id(id))
        // console.log(id)
    }
    useEffect(() => {
        dispatch(action_set_cur_path(window.location.pathname))
    }, [])
    return (
        <Route {...rest} render={props => <Component getTheUserId={get_the_user_id}
            {...props} />} />
    )
}

export default withRouter(connect()(PublicRoute))
