import axios from 'axios'

export async function removeMsg(msgId = "", roomName = "") {
    try {
        const res = await axios({
            method: 'post',
            url: 'http://localhost:4000/api/removemsg',
            data: {
                roomReq: roomName,
                msgid: msgId,
            },
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        return res
    } catch (error) {
        return { error }
    }
}

export async function getAllMsgs(room) {
    try {
        const res = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/allmsgs/'+room,
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        return res
    } catch (error) {
        return { error }
    }
}

export async function getAllChats(userId = "") {
    try {
        const res = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/allchats/'+userId,
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        return res
    } catch (error) {
        return { error }
    }
}