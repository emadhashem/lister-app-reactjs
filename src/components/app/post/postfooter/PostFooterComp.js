import React, { useState } from 'react'
import './postfootercompstyles.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Modal from 'react-modal';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { IconButton } from '@material-ui/core';

Modal.setAppElement('#root')
function PostFooterComp({ postId }) {
    const [starclicked, setstarclicked] = useState(false)
    const [openModal, setopenModal] = useState(false)

    const [loadingComments, setloadingComments] = useState(false)
    const [commentText, setcommentText] = useState('')
    async function handleComments() {
        setopenModal(true)
        setloadingComments(true)
    }

    async function addComment_(e) {
        e.preventDefault();
        alert('comment')
    }
    return (
        <div className="postfooter__container" >
            <Modal isOpen={openModal}
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

export default PostFooterComp
