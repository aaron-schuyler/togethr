import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTickets, submitTicket} from '../actions/tickets.js'
import Ticket from '../components/ticket.js'
import NewTicket from '../components/newTicket.js'

class Tickets extends Component {

  componentDidMount() {
    this.props.addTickets()
  }

  renderTickets() {
    return this.props.tickets.map((ticket, i) => {
      return <Ticket key={i} ticket={ticket} />
    })
  }

  handleSubmit = (ticketData) => {
    this.props.submitTicket(ticketData)
  }

  render() {
    return (
      <div className='container border-primary border rounded m-auto p-3'>
        <div className='row'>
          <div className='col-6 p-3'>
            <h2>New Ticket</h2>
            <hr />
            <NewTicket handleSubmit={this.handleSubmit} />
          </div>
          <div className='col p-3'>
            <h2>Your Tickets</h2>
            <hr />
            <div className='list-group'>
              {this.renderTickets()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {tickets: state.tickets}
}

export default connect(mapState, {addTickets, submitTicket})(Tickets)
