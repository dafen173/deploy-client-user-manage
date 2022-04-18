import { createStore } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {compose, applyMiddleware} from 'redux'
import rootReducer from './index'
import initialState from "../store/initialState"


const groupReducer = (state = initialState, action) => {
    switch (action.type) {  
        case 'ADD_GROUP' :
            return {
                ...state,
                //groupitems: action.payload
                groupitems: state.groupitems.concat([action.payload]) 
            }      
        case 'GET_GROUPS' :
        return {
            ...state,
            groupitems: action.payload
            //groupitems: state.groupitems.concat([action.payload]) 
        }    
        case 'DELETE_GROUP' :
        return {
            ...state,
            groupitems: action.payload
        }   
        case 'EDIT_GROUP' :
        return {
            ...state,
            groupitems: action.payload
        } 

        default:
            return state
    }
}

export default groupReducer



