import React, { useState } from 'react'
import { v4 } from 'uuid'
import './leftsidepanelstyless.scss'
import AddLinkIcon from '@mui/icons-material/AddLink';
import IconButton from '@mui/material/IconButton';
import { customStr } from '../../../utilities/commons';
function LeftSidePanel() {
    const [links, setlinks] = useState([])
    const [txtInput, settxtInput] = useState('')
    function addLink() {
        if (txtInput.length < 5) return;
        setlinks(() => [{ id: v4(), link: txtInput }, ...links])
        settxtInput('')
    }
    return (
        <div className="leftside__container" >
            <h3> Important Links </h3>
            <form onSubmit={addLink} >
                <input type="text" value={txtInput}
                    onChange={e => settxtInput(e.target.value)}
                    className="textlink__"
                />
                {/* <span className="btnlink__" >
                    <AddLinkIcon />
                </span> */}
                <IconButton onClick = {addLink} >
                    <AddLinkIcon />
                </IconButton>
            </form>
            <div className = "links__container" >
                {
                    links.map(item => (
                        <a target = "blank" key = {item.id} href = {item.link} >
                            <p>{customStr(item.link)}</p>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default LeftSidePanel
