import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'
import './leftsidepanelstyless.scss'
import AddLinkIcon from '@mui/icons-material/AddLink';
import IconButton from '@mui/material/IconButton';
import { customStr } from '../../../utilities/commons';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { getAllLinksByUser, addLink ,removeLink } from '../../../server/links'
import DeleteIcon from '@mui/icons-material/Delete';

function LeftSidePanel({ user }) {
    const [links, setlinks] = useState([])
    const [txtInput, settxtInput] = useState('')
    const [loadingLinks, setloadingLinks] = useState(false)
    const [addNewLinkLoading, setaddNewLinkLoading] = useState(false)
    useEffect(() => {
        (async () => {
            await getLinks()
        })()
    }, [])
    async function getLinks() {
        setloadingLinks(true)
        const resLinks = await getAllLinksByUser(user.id)
        setlinks(resLinks)
        setloadingLinks(false)

    }
    async function addLink_() {
        if (txtInput.length < 5) return;
        setaddNewLinkLoading(true)
        const newLink = { id: v4(), link: txtInput }
        setlinks(() => [{ ...newLink }, ...links])
        settxtInput('')
        await addLink(user.id, newLink.link, newLink.id)
        setaddNewLinkLoading(false)
    }
    async function removeLink_(linkId = "", link = "") {
        setlinks(links.filter(item => item.id != linkId))
        await removeLink(user.id, link, linkId)
        
    }
    return (
        <div className="leftside__container" >
            <h3> Important Links </h3>
            <form onSubmit={addLink_} >
                <input type="text" value={txtInput}
                    onChange={e => settxtInput(e.target.value)}
                    className="textlink__"
                />

                {(addNewLinkLoading == false) ? <IconButton onClick={addLink_} >
                    <AddLinkIcon />
                </IconButton> : (
                    <div style={{ width: '20%', margin: 'auto' }} >
                        <CircularProgress color="secondary" />
                    </div>
                )
                }
            </form>
            {
                (loadingLinks == true) ? (
                    <div style={{ width: '20%', margin: 'auto' }} >
                        <CircularProgress color="secondary" />
                    </div>
                ) : (
                    <div className="links__container" >
                        {
                            links.map(item => (
                                <div className="link__" >
                                    <a target="blank" key={item.id} href={item.link} >
                                        <p>{customStr(item.link)}</p>
                                    </a>
                                    <IconButton onClick = {() => removeLink_(item.id, item.link)} >
                                        <DeleteIcon color = "error" />
                                    </IconButton>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}
const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps)(LeftSidePanel)
