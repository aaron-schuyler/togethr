export default (state = [], action) => {
  let tickets = [...state]
  switch (action.type) {
    case 'ADD_TICKETS':
      return action.tickets
    case 'MODIFY_TICKET':
      //update ticket
      return tickets
    case 'SUBMIT_TICKET':
      console.log(action)
      tickets.push(action.ticket)
      return tickets
    case 'APPROVE_TICKET':
      const ticket = tickets.find(ticket => ticket.id === action.ticket.id)
      ticket.status = 'APPROVED'
      ticket.approved = true
      return tickets
    case 'DELETE_TICKET':
      return tickets.filter(ticket => ticket.id !== action.id)
    case 'CLOSE_TICKET':
      //set ticket.status to 'closed'
      return tickets
    default:
      return tickets
  }
}
