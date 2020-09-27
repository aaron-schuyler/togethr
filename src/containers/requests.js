import React, { Component } from 'react'
import {connect} from 'react-redux'
import Ticket from '../components/ticket.js'

class Tickets extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/tickets')
    .then(res => res.json())
    .then(tickets => tickets.forEach(ticket => {
        this.props.addRequest(ticket)
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
    addRequest: (ticket) => {
      dispatch({type: "ADD_REQUEST", ticket})
    }
  }
}

const mapState = state => {
  console.log(state)
  return {requests: state.requests}
}

export default connect(mapState, mapDispatch)(Tickets)
