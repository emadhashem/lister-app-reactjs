import React from 'react'
import { useParams } from 'react-router'
import ProfileComp from '../../components/app/profile/Profile'

function ProfileScreen() {
    const {idprofile} = useParams()
    return (
        <ProfileComp idprofile = {idprofile} />
    )
}

export default ProfileScreen
