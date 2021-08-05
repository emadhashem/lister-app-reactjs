import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { action_set_cur_path } from '../../redux/actions/commonActions'

function PrivateRoute({ user, component: Component, ...rest }) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(action_set_cur_path(window.location.pathname))
    }, [])
    return (
        <Route  {...rest}
            render={
                (props) => (user.id !== null) ? (<Component
                    {...props} />) :
                    (
                        <Redirect
                            to={{
                                pathname: '/auth/login',
                                state: { from: props.location }
                            }} />
                    )
            }
        />
    )
}
const mapStateToProps = ({ user }) => ({ user })
export default withRouter(connect(mapStateToProps)(PrivateRoute))
