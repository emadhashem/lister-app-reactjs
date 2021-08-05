import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import commonReducer from './commonReducer'
import userReducer from "./userReducer";
const persistConfig = {
    key: "listerStorage",
    storage,
    whitelist: ["user"],
};

const rootreducer = combineReducers({user : userReducer, common : commonReducer})

export default persistReducer(persistConfig, rootreducer);
