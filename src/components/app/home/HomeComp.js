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
            setposts([])
            await getAllPostsFromFollowings(user.id, setThePosts)
        })()
    }, [])

    function setThePosts(arr, postUserData) {
        setposts(curArr => sortByTime([...curArr, ...(arr.map(item => ({...postUserData, item})))]))
    }
    function sortByTime(arr = []) {
        return [...arr].sort((a, b) => {
            let timeA = new Date(a.time)
            let timeB = new Date(b.time)
            return timeA - timeB
        })
    }
    return (
        <div className="home__container" >
            <LeftSidePanel />

            <div className="postscontainer__" >
                {
                    posts.map(item => <PostComp key = {item.item.id}  {...item} />)
                }

            </div>
            <div className="rightside"></div>
        </div>
    )
}
const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps)(HomeComp)
