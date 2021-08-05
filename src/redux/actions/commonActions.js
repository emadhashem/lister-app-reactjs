import { SET_CUR_PATH } from "../types";

export function action_set_cur_path(path = "") {
    return {
        type : SET_CUR_PATH,
        path
    }
}