import React, { Component } from 'react'
import Tickets from './tickets.js'
import Requests from './requests.js'

export default class Dashboard extends Component {

  render() {
    return (
      <div className='container border-primary border rounded m-auto p-3'>
        <div className='row'>
          <div className='col'>
            <Requests />
          </div>
          <div className='col'>
            <p>Hello World</p>
          </div>
        </div>
      </div>
    )
  }
}
