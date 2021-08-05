import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

function PrivateRoute({ user, component: Component, ...rest }) {
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
