import React, { useState } from 'react'
import './postfootercompstyles.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import FavoriteIcon from '@mui/icons-material/Favorite'; function PostFooterComp() {
    const [starclicked, setstarclicked] = useState(false)
    return (
        <div className="postfooter__container" >
            <span onClick={() => setstarclicked(!starclicked)} >
                {(starclicked === false) ?
                    <FavoriteBorderIcon sx = {{color : 'gray'}} /> :
                    <FavoriteIcon sx = {{color : 'orange'}} />}
            </span>
            <span  >
                <InsertCommentIcon sx = {{color : 'orange'}} />
            </span>
        </div>
    )
}

export default PostFooterComp
