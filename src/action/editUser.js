export const editUser = (userValue, groupValue, id) => {
    return async dispatch => {
        try {
            const response = await fetch(`https://server-user-manage.herokuapp.com/api/manage-user/${id}`, {
                    method: 'PUT',      
                    body: JSON.stringify({
                    username: userValue, 
                    groupname: groupValue,
                    id: id
                    }),
                    headers: {
                    'Content-Type': 'application/json'
                    }
                })
                const json = await response.json()
                dispatch({type: 'EDIT_USER', payload: json })
        } catch (e) {
          console.warn('Error: ', e.message)
          alert('Error: ' + e.message)
        }
    }
}



// export const editUser = (userValue, groupValue, id) => {
//     return async dispatch => {
//         const response = await fetch(`http://localhost:8080/api/manage-user/${id}`, {
//             method: 'PUT',      
//             body: JSON.stringify({
//             username: userValue, 
//             groupname: groupValue,
//             id: id
//             }),
//             headers: {
//             'Content-Type': 'application/json'
//             }
//         })
//         const json = await response.json()
//         dispatch({type: 'EDIT_USER', payload: json })
//     }
// }



