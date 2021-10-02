import { SET_USER_ID , SET_USER_NAME} from "../types";

export function action_set_user_id(id) {
    return {
        type : SET_USER_ID,
        id
    }
}

export function set_user_name(name) {
    return {
        type : SET_USER_NAME,
        name
    }
}
