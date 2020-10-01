import React from 'react'

export default function Ticket(props) {
  return (
    <div className='list-group-item'>
      <div className='row'>
        <div className='col'>
        <span>
          <span className='d-inline-block align-middle'>
          <b>{props.ticket.title} &bull; </b>
          {
            props.ticket.approved ? <span className='text-success'>Approved</span> : props.ticket.accepted ?
<span className='text-primary'>Accepted</span> : <span className='text-warning'>Submitted</span>
          }

          </span>

        </span>
        </div>
      </div>
      <div className='row my-2'>
        <div className='col'>
          {props.ticket.skills.map((skill, i) => {
            return (<span key={i} className='badge badge-secondary mr-2'>{skill}</span>)
          })}
        </div>
      </div>
      <div className='row pt-2'>
        <div className='col'>
          {!props.ticket.approved && props.ticket.accepted && <button onClick={props.handleApprove} id={props.ticket.id} className='btn btn-success btn-sm'>Approve</button>}
        </div>
        <div className='col text-right'>
          <div className='btn-group'>
            {props.ticket.accepted && <a href='mailto:theuser@gmail.com' className='btn btn-success btn-sm'>C</a>}
            <button className='btn btn-primary btn-sm'>E</button>
            <button className='btn btn-danger btn-sm' id={props.ticket.id} onClick={props.handleDelete}>X</button>
          </div>
        </div>
      </div>
    </div>
  )
}
