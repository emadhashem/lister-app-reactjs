import React, { useEffect, useState } from 'react'
import './postfootercompstyles.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Modal from 'react-modal';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { IconButton } from '@material-ui/core';
import CircularProgress from '@mui/material/CircularProgress';
import { v4 } from 'uuid';
import { addComment, getAllCommenstByPostId, removeComment } from '../../../../server/posts';
import { connect } from 'react-redux';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
Modal.setAppElement('#root')
function PostFooterComp({ postId, ownedUser, user }) {
    const [starclicked, setstarclicked] = useState(false)
    const [openModal, setopenModal] = useState(false)
    
    const [loadingComments, setloadingComments] = useState(false)
    const [commentText, setcommentText] = useState('')
    const [comments, setcomments] = useState([])
    const [isMyPost, setisMyPost] = useState(false)
    
    async function handleComments() {

        setopenModal(true)
        setloadingComments(true)
        const resComments = await getAllCommenstByPostId(postId)
        setcomments([...resComments].reverse())
        setloadingComments(false)
    }
    async function addComment_(e) {
        e.preventDefault();
        const newComment = {
            text: commentText,
            id: v4()
        }
        setcomments(arr => [{ ...newComment }, ...arr])
        setcommentText('')
        await addComment(newComment.text, postId, newComment.id)
    }

    async function removeComment_(commentId = '', text = '') {

        setcomments(comments.filter(item => item.id != commentId))
        await removeComment(text, postId, commentId)
    }
    return (
        <div className="postfooter__container" >
            <Modal
                shouldFocusAfterRender={false}

                isOpen={openModal}
                onAfterClose={() => {
                    setcomments([])
                }}
                style={{
                    content: {
                        display: 'flex',
                        flexDirection: 'column'
                    }
                }}
            >
                <div>
                    <IconButton onClick={() => setopenModal(false)} >
                        <CloseFullscreenIcon />
                    </IconButton>
                </div>
                <form onSubmit={addComment_} className="comment__input__form"  >
                    <input
                        value={commentText}
                        onChange={ev => setcommentText(ev.target.value)}
                        className="comment__input_text" type="text" placeholder="Enter New Comment" />
                    <IconButton onClick={addComment_} >
                        <AddCommentIcon />
                    </IconButton>
                </form>
                <div className="comments__container" >
                    {
                        (loadingComments == true) ? <div
                            style={{ display: 'flex', justifyContent: 'center' }} >
                            <CircularProgress />
                        </div> : (
                            comments.map(item => (
                                <div className="comment__container" key={item.id} >
                                    <p>{item.text}</p>
                                    {
                                        (isMyPost) && <IconButton
                                            onClick={() => removeComment_(item.id, item.text)} >
                                            <DeleteOutlineIcon />
                                        </IconButton>
                                    }
                                </div>
                            ))
                        )
                    }
                </div>
            </Modal>
            {/* <span onClick={() => setstarclicked(!starclicked)} >
                {(starclicked === false) ?
                    <FavoriteBorderIcon sx={{ color: 'gray' }} /> :
                    <FavoriteIcon sx={{ color: 'orange' }} />}
            </span> */}
            <span onClick={handleComments} >
                <InsertCommentIcon sx={{ color: 'orange' }} />
            </span>
        </div>
    )
}
const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps)(PostFooterComp)
