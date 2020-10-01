export function fetchRequests(){
  return (dispatch) => {
    return fetch('http://localhost:3000/requests', {
      credentials: 'include'
    })
    .then(res => res.json())
    .then((requests) => dispatch({type: 'ADD_REQUESTS', requests: requests}))
  }
}

export function acceptRequest(id){
  return (dispatch) => {
    return fetch('http://localhost:3000/requests/' + id + '/accept', {
      credentials: 'include',
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(request => dispatch({type: 'ACCEPT_REQUEST', request: request}))
  }
}
