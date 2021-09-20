import React from 'react'
import PostComp from '../post/postcomp/PostComp'
import LeftSidePanel from '../leftsidepanel/LeftSidePanel'
import './homestyles.css'
function HomeComp() {
    return (
        <div className="home__container" >
            <LeftSidePanel />
            
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
            <div className = "rightside"></div>
        </div>
    )
}

export default HomeComp
