import React, { Component } from 'react'
import {connect} from 'react-redux'
import Request from '../components/request.js'

class Requests extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/tickets')
    .then(res => res.json())
    .then(requests => requests.forEach(request => {
        this.props.addRequest(request)
      })
    )
  }

  renderRequests() {
    return this.props.requests.map((request, i) => {
      return <Request key={i} request={request} />
    })
  }

  render() {
    return (
      <>
        {this.renderRequests()}
      </>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    addRequest: (request) => {
      dispatch({type: "ADD_REQUEST", request})
    }
  }
}

const mapState = state => {
  return {requests: state.requests}
}

export default connect(mapState, mapDispatch)(Requests)
