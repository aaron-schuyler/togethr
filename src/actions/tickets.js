export function addTickets(){
  return (dispatch) => {
    return fetch('http://localhost:3000/tickets', {
      credentials: 'include'
    })
    .then(res => res.json())
    .then((tickets) => dispatch({type: 'ADD_TICKETS', tickets: tickets}))
  }
}

export function submitTicket(ticket) {
  return (dispatch) => {
    return fetch('http://localhost:3000/tickets',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(ticket)
    })
    .then(res => res.json())
    .then(json => dispatch({type: 'SUBMIT_TICKET', ticket: json.ticket}))
  }
}

export function approveTicket(id) {
  return (dispatch) => {
    return fetch('http://localhost:3000/tickets/' + id + '/approve', {
      credentials: 'include',
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(ticket => dispatch({type: 'APPROVE_TICKET', ticket: ticket}))
  }
}

export function deleteTicket(id) {
  return (dispatch) => {
    return fetch('http://localhost:3000/tickets/' + id, {
      credentials: 'include',
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(json => dispatch({type: 'DELETE_TICKET', id: id}))
  }
}
