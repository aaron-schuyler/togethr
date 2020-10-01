import React from 'react'

export default function Request(props) {
  return (
    <div className='card'>
      <div className='card-header'>
        <h2>{props.request.title}</h2>
        <span className='badge border text-primary border-primary'>{props.request.category}</span>
        <b> - </b>
        <span className='badge border text-secondary border-secondary'>{props.request.subcategory}</span>
        <br />
        <hr />
        <b>Skills: </b>{props.request.skills.map((skill, i) => {
          return <span key={i} className='badge badge-pill badge-secondary'>{skill}</span>
        })}
      </div>
      <div className='card-body'>
        <p>{props.request.description}</p>
      </div>
      <div className='card-footer text-center'>
        <div className='btn-group'>
          <button
            className='btn-sm btn btn-success'
            id={props.request.id}
            onClick={props.accept}
          >
            Accept
          </button>
          <button className='btn-sm btn btn-danger'>Decline</button>
        </div>

      </div>
    </div>
  )
}
