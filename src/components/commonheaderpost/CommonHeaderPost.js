import React from 'react'
import './headerpost.css'
import { imgSrcObito } from '../../utilities/commons'
function CommonHeaderPost({ imgSrc, hideDate = true, name, date = new Date(), imgSize = 50 }) {
    console.log(date)
    return (
        <div className="headerpost__container">
            <div className = "img_name" >
                <img style = {{height : imgSize, width : imgSize}} src={imgSrcObito} />
                <p>{name}</p>
            </div>
            {
                (!hideDate) && (<p>{`${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`}</p>)
            }
        </div>
    )
}

export default CommonHeaderPost
