import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

function PublicRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={props => <Component {...props} />} />
    )
}

export default withRouter(connect()(PublicRoute))
