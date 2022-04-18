import initialState from "../store/initialState"

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER' :
            //console.log('addUsers work')
            //console.log(state)
            return {
                ...state,  
                //items: action.payload
                items: state.items.concat([action.payload])
            }
        case 'GET_USERS' :
            return {
                ...state,
                items: action.payload
            }    
        case 'DELETE_USER' :
            return {
                ...state,
                items: action.payload
            }   
        case 'EDIT_USER' :
            return {
                ...state,
                items: action.payload
            }    
        case 'EDIT_GROUP_ON_USERS_PAGE' :
            return {
                ...state,
                items: action.payload
            }  
        default:
            return state
    }

}

export default userReducer




