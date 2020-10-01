export function addTickets(){
  return (dispatch) => {
    return fetch('http://localhost:3000/tickets', {
      credentials: 'include'
    })
    .then(res => res.json())
    .then((tickets) => dispatch({type: 'ADD_TICKETS', tickets: tickets}))
  }
}
