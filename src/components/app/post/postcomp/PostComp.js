import { CallMergeOutlined } from '@material-ui/icons'
import { Avatar } from '@mui/material'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { v4 } from 'uuid'
import { downloadImg } from '../../../../server/storageFirebase'
import PostBodyComp from '../postbody/PostBodyComp'
import PostFooterComp from '../postfooter/PostFooterComp'
import './postcompstyles.scss'
function PostComp({ ...rest }) {
    // const [todos, settodos] = useState(todosFromParent)
    const [useImg, setuseImg] = useState('')
    const go = useHistory()
    useEffect(() => {
        (async () => {
            setuseImg(await downloadImg(`imgs/${rest.userId}`))
        })()
    }, [])
    return (
        <div className="post__container">
            <div className="post__header" >
                <Avatar alt="Remy Sharp"
                    src={useImg}
                    sx={{ width: 45, height: 45 }}
                />
                <div className="username__time__container">
                    <span 
                    onClick = {() => go.push('/member/profile/' + rest.userId)}
                    className="usrname__" >{rest.fName} {` `} {rest.lName} </span>
                    <p className="time__" >{moment(new Date(rest.item.time)).format('MMMM Do YYYY, h:mm:ss a')}</p>
                </div>
            </div>
            <PostBodyComp title={rest.item.title}
                todos={rest.item.todos}
            />
            <PostFooterComp />
        </div>
    )
}

export default PostComp
