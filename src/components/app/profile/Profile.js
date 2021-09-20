import React, { useState } from 'react'
import { connect } from 'react-redux'


function ProfileComp({idprofile, user}) {
    const [isMine, setisMine] = useState(idprofile == user.id)
    
    return (
        <div>
            this ProfileComp {idprofile}
        </div>
    )
}
const mapStateToProps = ({user}) => ({user})
export default connect(mapStateToProps)(ProfileComp)
