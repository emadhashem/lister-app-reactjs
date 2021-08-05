import { SET_CUR_PATH } from "../types";

const initState = {
    path : '/'
}

export default function commonReducer(state = initState, action) {
    switch (action.type) {
        case SET_CUR_PATH: return {...state, path : action.path} 
            
            break;
    
        default: return state
            break;
    }
}