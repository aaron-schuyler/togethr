export function fetchRequests(){
  return (dispatch) => {
    return fetch('http://localhost:3000/tickets', {
      credentials: 'include'
    })
    .then(res => res.json())
    .then((requests) => dispatch({type: 'ADD_REQUESTS', requests: requests}))
  }
}
