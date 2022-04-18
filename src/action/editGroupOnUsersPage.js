export const editGroupOnUsersPage = (groupValue, groupId) => {
    return async dispatch => {
        const response = await fetch(`https://server-user-manage.herokuapp.com/api/manage-user/update-groupname/${groupId}`, {
            method: 'PUT',      
            body: JSON.stringify({
            groupname: groupValue, 
            group_id: groupId
            }),
            headers: {
            'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        dispatch({type: 'EDIT_GROUP_ON_USERS_PAGE', payload: json })
    }
}




