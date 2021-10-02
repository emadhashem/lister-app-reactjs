import { SET_USER_ID, SET_USER_NAME } from '../types'

const initState = {
    id: null,
    name: ''
}

export default function userReducer(state = initState, action) {
    switch (action.type) {
        case SET_USER_ID: return { ...state, id: action.id }
            break;
        case SET_USER_NAME: return { ...state, name: action.name }
            break;
        default: return state
            break;
    }
}