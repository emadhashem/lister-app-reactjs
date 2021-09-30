import React, { useState } from 'react'
import './searchstyles.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SearchIcon from '@material-ui/icons/Search';
import { uid } from 'uid'
import { getUsersByNames } from '../../../server/user';
import { downloadImg } from '../../../server/storageFirebase';
import { Avatar } from '@mui/material';
import { useHistory } from 'react-router';


function SearchComp() {
    const [searchText, setsearchText] = useState('')
    const [searchRes, setsearchRes] = useState([])

    const go = useHistory()
    async function handleSearchText(text) {
        setsearchText(text)
        if (text.length == 0) {
            setsearchRes([])
            return;
        }
        const res = await getUsersByNames(text, addResToState)
    }
    function addResToState(item) {
        console.log(item)
        setsearchRes(arr => [...arr, item])
    }
    function handleResultClick(userId) {
        setsearchRes([])
        go.push('/member/profile/' + userId)
    }
    return (
        <div className="search__root" >
            {(searchRes.length > 0) && <div className="search__results__container" >
                {
                    searchRes.map((item) => {
                        
                        return (
                            <div 
                            onClick = {() => handleResultClick(item.id)}
                            key={item.id} className="reslut__container" >
                                <Avatar src = {item.userImg} sx = {{width : 50, height : 50}} />
                                <p>{item.fName} {item.lName}</p>
                            </div>
                        )
                    })
                }
            </div>}
            <div className="search__container" >

                <SearchIcon />
                <input className="search__input" type="text"
                    value={searchText}
                    onChange={(ev) => handleSearchText(ev.target.value)} />
            </div>
        </div>

    )
}

export default SearchComp
