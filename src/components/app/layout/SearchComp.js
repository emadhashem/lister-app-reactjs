import React, { useState } from 'react'
import './searchstyles.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SearchIcon from '@material-ui/icons/Search';
import {uid} from 'uid'
import CommonHeaderPost from '../../commonheaderpost/CommonHeaderPost';

const searchResults = ["omda", "emad", "test", "test2", "ali", "abdo"]

function SearchComp() {
    const [searchText, setsearchText] = useState('')
    return (
        <div className="search__root" >
            {(searchResults.length < 0) && <div className = "search__results__container" >
                {
                    searchResults.map(item => (
                        <CommonHeaderPost name = {item}  />
                    ))
                }
            </div>}
            <div className="search__container" >

                <SearchIcon />
                <input className="search__input" type="text"
                    value={searchText}
                    onChange={(ev) => setsearchText(ev.target.value)} />
            </div>
        </div>

    )
}

export default SearchComp
