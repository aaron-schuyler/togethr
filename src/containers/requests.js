import React, { Component } from 'react'
import {connect} from 'react-redux'
import Request from '../components/request.js'
import AcceptedRequest from '../components/acceptedRequest.js'
import {fetchRequests} from '../actions/requests.js'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

class Requests extends Component {

  componentDidMount() {
    this.props.getRequestsAndAddToStore()
  }

  renderRequests() {
    return this.props.requests.map((request, i) => {
      if (!request.accepted) return <Request key={i} request={request} />
    })
  }

  renderAcceptedRequests() {
    return this.props.requests.map((request, i) => {
        if (request.accepted) return <AcceptedRequest key={i} request={request} />
      })
  }

  render() {
    return (
      <div className='container border-primary border rounded m-auto p-3'>
        <div className='row'>
          <div className='col-6 p-3'>
            <Slider>
              {this.renderRequests()}
            </Slider>
          </div>
          <div className='col p-3'>
            <div className='list-group'>
              {this.renderAcceptedRequests()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}



const mapDispatch = dispatch => {
  return {
    getRequestsAndAddToStore: () => {
      dispatch(fetchRequests())
    }
  }
}

const mapState = state => {
  return {requests: state.requests}
}

export default connect(mapState, mapDispatch)(Requests)
