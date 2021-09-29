import React, { useState } from 'react'
import './searchstyles.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SearchIcon from '@material-ui/icons/Search';
import {uid} from 'uid'
import { getUsersByNames } from '../../../server/user';


function SearchComp() {
    const [searchText, setsearchText] = useState('')
    const [searchRes, setsearchRes] = useState([])
    async function handleSearchText(text) {
        setsearchText(text)
        if(text.length == 0) {
            setsearchRes([])
            return;
        }
        const res = await getUsersByNames(text, addResToState)
    }
    function addResToState(item) {
        setsearchRes(arr => [...arr, item])
    }
    return (
        <div className="search__root" >
            {(searchRes.length > 0) && <div className = "search__results__container" >
                {
                    searchRes.map(item => (
                        <p key = {item.id} >{item.fName} {item.lName}</p>
                    ))
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
