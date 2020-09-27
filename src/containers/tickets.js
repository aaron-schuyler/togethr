import React, { Component } from 'react'
import {connect} from 'react-redux'
import Ticket from '../components/ticket.js'

class Tickets extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/tickets')
    .then(res => res.json())
    .then(tickets => tickets.forEach(ticket => {
        this.props.addTicket(ticket)
      })
    )
  }

  renderTickets() {
    console.log(this.props.tickets)
    return this.props.tickets.map((ticket, i) => {
      return <Ticket key={i} ticket={ticket} />
    })
  }

  render() {
    return (
      <>
        {this.renderTickets()}
      </>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    addTicket: (ticket) => {
      dispatch({type: "ADD_TICKET", ticket})
    }
  }
}

const mapState = state => {
  return {tickets: state.tickets}
}

export default connect(mapState, mapDispatch)(Tickets)
