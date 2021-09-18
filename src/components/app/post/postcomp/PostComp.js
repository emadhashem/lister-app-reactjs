import { Avatar } from '@mui/material'
import moment from 'moment'
import React, { useState } from 'react'
import { v4 } from 'uuid'
import PostBodyComp from '../postbody/PostBodyComp'
import PostFooterComp from '../postfooter/PostFooterComp'
import './postcompstyles.scss'
function PostComp({title}) {
    const [todos, settodos] = useState(Array(10).fill({
        text: 'text',
        id: v4()
    }))
    return (
        <div className="post__container">
            <div className="post__header" >
                <Avatar alt="Remy Sharp" 
                src="/static/images/avatar/1.jpg"
                sx = {{width : 45, height : 45}}
                />
                <div className = "username__time__container">
                    <p className = "usrname__" >user name</p>
                    <p className = "time__" >{moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')}</p>
                </div> 
            </div>
            <PostBodyComp title = {title} todos = {todos} />
            <PostFooterComp />
        </div>
    )
}

export default PostComp
