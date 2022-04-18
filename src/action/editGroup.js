export const editGroup = (groupValue, describeValue, id) => {
    return async dispatch => {
        try {
            const response = await fetch(`https://server-user-manage.herokuapp.com/api/manage-group/${id}`, {
                    method: 'PUT',      
                    body: JSON.stringify({
                    groupname: groupValue, 
                    groupdescription: describeValue,
                    id: id
                    }),
                    headers: {
                    'Content-Type': 'application/json'
                    }
                })
                const json = await response.json()
                dispatch({type: 'EDIT_GROUP', payload: json })
        } catch (e) {
          console.warn('Error: ', e.message)
          alert('Error: ' + e.message)
        }
    }
}




// export const editGroup = (groupValue, describeValue, id) => {
//     return async dispatch => {
//         const response = await fetch(`http://localhost:8080/api/manage-group/${id}`, {
//             method: 'PUT',      
//             body: JSON.stringify({
//             groupname: groupValue, 
//             groupdescription: describeValue,
//             id: id
//             }),
//             headers: {
//             'Content-Type': 'application/json'
//             }
//         })
//         const json = await response.json()
//         dispatch({type: 'EDIT_GROUP', payload: json })
//     }
// }







