import React from 'react'
import Header from './Header'
import './layout.css'
function Layout({ ...props }) {
    return (
        <div className="layout__conatiner" >
            <Header />
            <div className="childern__content" >
                {props.children}
            </div>
        </div>
    )
}

export default Layout
