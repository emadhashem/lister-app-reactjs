import React from 'react'
import PostComp from '../post/postcomp/PostComp'

import './homestyles.css'
function HomeComp() {
    return (
        <div className="home__container" >
            <div className="importantliks__"></div>
            <div className="postscontainer__" >
               <PostComp title = "this todo's title" />
               <PostComp title = "this todo's title" />
               <PostComp title = "this todo's title" />
               <PostComp title = "this todo's title" />
               <PostComp title = "this todo's title" />
               <PostComp />
               <PostComp />
               <PostComp />
               <PostComp />
               
            </div>
        </div>
    )
}

export default HomeComp
