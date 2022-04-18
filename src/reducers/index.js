import { combineReducers } from "redux"
import userReducer from "./userReducer"
import groupReducer from "./groupReducer"

export default combineReducers({
    users: userReducer,
    groups: groupReducer
})


