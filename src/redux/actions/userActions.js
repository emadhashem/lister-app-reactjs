import { SET_USER_ID } from "../types";

export function action_set_user_id(id) {
    return {
        type : SET_USER_ID,
        id
    }
}
