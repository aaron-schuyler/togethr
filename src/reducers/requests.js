export default (state = [], action) => {
  let requests = [...state]
  switch (action.type) {
    case 'ADD_REQUESTS':
      return action.requests
    case 'ACCEPT_REQUEST':
      //if ticket.accepted == false or if ticket.status == 'conditional_pending'
      //change ticket.accepted to true and accepted_by to user.id and ticket.status to 'pending' submit to API
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
