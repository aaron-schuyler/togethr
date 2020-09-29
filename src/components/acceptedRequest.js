import React from 'react'

export default function AcceptedRequest(props) {
  return (
    <div className='list-group-item'>
      <div className='row'>
        <div className='col'>
        <span>
          <span className='d-inline-block align-middle'>
          <b>{props.request.title} &bull; </b>
          {
            props.request.approved ? <span className='text-primary'>Approved</span> :
<span className='text-warning'>Pending</span>
          }

          </span>

        </span>
        </div>
      </div>
      <div className='row my-2'>
        <div className='col'>
          {props.request.skills.map((skill, i) => {
            return (<span key={i} className='badge badge-primary'>{skill}</span>)
          })}
        </div>
      </div>
      <div className='row'>
        <div className='col text-right'>
          <a className='btn btn-success btn-sm'>Contact</a>
        </div>
      </div>
    </div>
  )
}
