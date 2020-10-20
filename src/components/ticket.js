import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEnvelope, faPen, faStar} from '@fortawesome/free-solid-svg-icons'


export default function Ticket(props) {

  const [rating, setRating] = useState(0)

  const handleStarClick = (id) => {
    setRating(id)
  }
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
          {!props.ticket.approved && props.ticket.accepted && <button onClick={e => props.handleApprove(props.ticket.id)} className='btn btn-success btn-sm'>Approve</button>}

          {props.ticket.approved &&
            <div className='stars'>
              {rating}
              <button onClick={e => handleStarClick(1, e.target)}><FontAwesomeIcon icon={faStar} /></button>
              <button onClick={e => handleStarClick(2)}><FontAwesomeIcon   icon={faStar} /></button>
              <button onClick={e => handleStarClick(3)}><FontAwesomeIcon  icon={faStar} /></button>
              <button onClick={e => handleStarClick(4)}><FontAwesomeIcon  icon={faStar} /></button>
              <button onClick={e => handleStarClick(5)}><FontAwesomeIcon icon={faStar} /></button>
            </div>
          }
        </div>
        <div className='col text-right'>
          <div className='btn-group'>
            {props.ticket.accepted && <a href={`mailto:${props.ticket.contact}`} className='btn btn-success btn-sm'><FontAwesomeIcon icon={faEnvelope} /></a>}
            {!props.ticket.approved && <button className='btn btn-primary btn-sm'><FontAwesomeIcon icon={faPen} /></button>}
            <button className='btn btn-danger btn-sm' onClick={e => props.handleDelete(props.ticket.id)}><FontAwesomeIcon icon={faTrash} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
