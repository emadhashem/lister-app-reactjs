import React, { useState } from 'react'
import AvatarComp from '../util/avatarcomp/AvatarComp'
import './postcompstyle.scss'
import moment from 'moment'
import TodoComp from '../todocomp/TodoComp'
import PostBodyComp from '../postbodycomp/PostBodyComp'
import { v4 as uuidv4, v4 } from 'uuid';

const srcimg = "https://scontent.fcai20-4.fna.fbcdn.net/v/t1.6435-9/74495384_788089618316751_3677642098833620992_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dngr-53U4S0AX9hcaES&_nc_ht=scontent.fcai20-4.fna&oh=45aee6e78b2584e1024e4c3b1f277f75&oe=61649CA3"

function PostComp({ postBodyText }) {
    const [todos, settodos] = useState([
        Array(10).fill({
            text: 'text',
            id: v4()
        })
    ])
    return (
        <div className="postcomp__container" >
            <div className="post__header" >
                <div className="avatar__name__time">
                    <AvatarComp imgSize="50px" src={srcimg} />
                    <div className="name__time" >
                        <p>user name</p>
                        <p>{moment(new Date()).format("MMM D YYYY")}</p>
                    </div>
                </div>

                {/* more icon */}
            </div>
            <div className="post__body" >
                <p>{postBodyText}</p>
                <PostBodyComp todos={todos} />
                <div className="todos__container">
                </div>
            </div>
        </div>
    )
}

export default PostComp
