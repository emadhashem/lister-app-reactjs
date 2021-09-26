import React, { useEffect, useState } from 'react'
import PostComp from '../post/postcomp/PostComp'
import LeftSidePanel from '../leftsidepanel/LeftSidePanel'
import './homestyles.css'
import { connect } from 'react-redux'
import { getAllPostsFromFollowings } from '../../../server/posts'
function HomeComp({ user }) {
    const [posts, setposts] = useState([])
    useEffect(() => {
        (async () => {
            await getAllPostsFromFollowings(user.id, setThePosts)
        })()
    }, [])

    function setThePosts(arr, postUserData) {
        setposts(curArr => [...curArr, ...(arr.map(item => ({...postUserData, item})))])
    }
    return (
        <div className="home__container" >
            <LeftSidePanel />

            <div className="postscontainer__" >
                {
                    posts.map(item => <PostComp  {...item} />)
                }

            </div>
            <div className="rightside"></div>
        </div>
    )
}
const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps)(HomeComp)
