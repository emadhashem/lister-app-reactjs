import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import BookIcon from '@material-ui/icons/Book';
import OptionComp from './OptionComp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import './optionsstyles.css'
import { useHistory } from 'react-router';

function OptionsComp({ onLogOut, userId }) {
    const go = useHistory()

    return (
        <div className="options__conatiner" >
            <OptionComp onClick={() => { go.push('/member/profile/' + userId) }}
                icon={() => <BookIcon fontSize="large" />} />
            <OptionComp onClick={() => { go.push('/member/chat') }}
                icon={() => <ChatBubbleIcon fontSize="large" />} />
            <OptionComp
                onClick={() => { go.push('/member/board') }}
                icon={() => <DashboardIcon fontSize="large"/>} />
            <OptionComp onClick={onLogOut}
                icon={() => <ExitToAppIcon fontSize="large" />} />
        </div>
    )
}

export default OptionsComp
