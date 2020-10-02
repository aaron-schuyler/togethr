import React, { Component } from 'react'
import {connect} from 'react-redux'
import Request from '../components/request.js'
import AcceptedRequest from '../components/acceptedRequest.js'
import {fetchRequests, acceptRequest} from '../actions/requests.js'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

class Requests extends Component {

  componentDidMount() {
    this.props.fetchRequests()
  }

  renderRequests() {
      let requests = []
      this.props.requests.forEach((request, i) => {
        if (!request.accepted) requests.push(<Request key={i} request={request} accept={this.handleAccept} />)
      })
      return (requests.length > 0) ? requests : <div className='border text-center rounded p-3'><p className='my-auto'>There are no more open requests. Requests will appear here as users submit them.</p></div>
  }

  renderAcceptedRequests() {
    let requests = []
    this.props.requests.forEach((request, i) => {
        if (request.accepted) requests.push(<AcceptedRequest key={i} request={request} />)
      })
      return (requests.length > 0) ? requests : <div className='border text-center rounded p-3'><p className='my-auto'>You have no active requests.</p></div>
  }

  handleAccept = (e) => {
    const id = e.target.id
    this.props.acceptRequest(id)
  }

  render() {
    return (
      <div className='container border-primary border rounded m-auto p-3'>
        <div className='row'>
          <div className='col-6 p-3'>
            <h2>Open Requests</h2>
            <hr />
            <Slider>
              {this.renderRequests()}
            </Slider>
          </div>
          <div className='col p-3'>
            <h2>Your Accepted Requests</h2>
            <hr />
            <div className='list-group'>
              {this.renderAcceptedRequests()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {requests: state.requests}
}

export default connect(mapState, {fetchRequests, acceptRequest})(Requests)
