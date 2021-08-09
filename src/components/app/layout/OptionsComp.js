import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import BookIcon from '@material-ui/icons/Book';
import OptionComp from './OptionComp';
import './optionsstyles.css'

function OptionsComp({ onLogOut }) {


    return (
        <div className="options__conatiner" >
            <OptionComp onClick={() => { }}
                icon={() => <BookIcon fontSize="large" />} />
            <OptionComp onClick={() => { }}
                icon={() => <ChatBubbleIcon fontSize="large" />} />
            <OptionComp onClick={onLogOut}
                icon={() => <ExitToAppIcon fontSize="large" />} />
        </div>
    )
}

export default OptionsComp
