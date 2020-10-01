export default (state = [], action) => {
  let requests = [...state]
  switch (action.type) {
    case 'ADD_REQUESTS':
      return action.requests
    case 'ACCEPT_REQUEST':
      const ticket = requests.find(ticket => ticket.id === action.request.id)
      ticket.status = 'PENDING_APPROVAL'
      ticket.accepted = true
      return requests
    case 'REJECT_REQUEST':
      //Remove Join Table Entry connecting ticket and USer
      return requests
    case 'CONDITIONALLY_ACCEPT_REQUEST':
      //add note to ticket and change status to 'conditional_pending' and set accepted_by to user.id
      return requests
    default:
      return requests
  }
}
