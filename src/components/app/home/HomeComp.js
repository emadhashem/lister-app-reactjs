import React from 'react'
import PostComp from '../postcomp/PostComp'
import './homestyles.css'
function HomeComp() {
    return (
        <div className="home__container" >
            <div className="importantliks__"></div>
            <div className="postscontainer__" >
                <PostComp
                    postBodyText  ="vnfjvnfjvnf jfnvjfkdv junfdvjkfdn v"
                />
                <PostComp />
                <PostComp />
                <PostComp />
                <PostComp />
            </div>
        </div>
    )
}

export default HomeComp
