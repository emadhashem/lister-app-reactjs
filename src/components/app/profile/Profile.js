import React, { useState } from 'react'
import { connect } from 'react-redux'
import './profilestyles.scss'

function ProfileComp({ idprofile, user }) {
    const [isMine, setisMine] = useState(idprofile == user.id)

    return (
        <div className="profilecontainer__" >
            <div className="top__container" >
                <div className="avatar__username__container" ></div>
                <div className="folwer__folwing__container" ></div>
                {
                    (!isMine) && <div className="flw__messg__btns__container" ></div>
                }
            </div>
            <div className="down__container" ></div>
        </div>
    )
}
const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps)(ProfileComp)
