export default (state = [], action) => {
  let tickets = [...state]
  switch (action.type) {
    case 'ADD_TICKETS':
      return action.tickets
    case 'MODIFY_TICKET':
      //update ticket
      return tickets
    case 'SUBMIT_TICKET':
      //change ticket status to 'submitted'
      return tickets
    case 'DELETE_TICKET':
      //Delete Ticket and remove from state
      return tickets
    case 'APPROVE_TICKET':
      //can only be done if ticket.status is pending or conditional_pending
      //remove all ticket user join table entries except the one that has the matching user ID
      //set status to approved
      return tickets
    case 'CLOSE_TICKET':
      //set ticket.status to 'closed'
      return tickets
    default:
      return tickets
  }
}
