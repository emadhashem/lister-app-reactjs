import {SET_USER_ID} from '../types'

const initState = {
    id :null
}

export default function userReducer(state = initState, action) {
    switch (action.type) {
        case SET_USER_ID: return {...state, id : action.id}
            
            break;
    
        default: return state
            break;
    }
}