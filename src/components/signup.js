import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function NewTicket(props) {
  const [userData, setUserData] = useState('')
  const [errors, setErrors] = useState()

  const submit = (e) => {
    e.preventDefault()
    console.log(userData)
    fetch('https://aaronschuyler-togethr.herokuapp.com/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body:  JSON.stringify({user: userData})
    })
    .then(res => res.json())
    .then(json => {
    if (json.success)  props.handleLogin(json.success)
    else setErrors(json.messages.map((error, i) => <div key={i} className='alert alert-danger'>{error}</div>))
    })
  }

  return (
    <div className='card w-25 p-3 m-auto'>
      <h2>Sign Up</h2>
      {errors}
      <form onSubmit={submit}>
        <input
          required
          name='username'
          className='form-control mb-3'
          placeholder='Username'
          onChange={e => setUserData({...userData, username: e.target.value})}
        />
        <input
          required
          type='email'
          name='email'
          className='form-control mb-3'
          placeholder='Email Address'
          onChange={e => setUserData({...userData, email: e.target.value})}
        />
        <input
          required
          type='password'
          name='password'
          className='form-control mb-3'
          placeholder='Password'
          onChange={e => setUserData({...userData, password: e.target.value})}
        />
        <input
          required
          type='password'
          name='password_confirmation'
          className='form-control mb-3'
          placeholder='Password Confirmation'
          onChange={e => setUserData({...userData, password_confirmation: e.target.value})}
        />
        <input
          type='submit'
          value='Sign Up'
          className='btn btn-sm btn-success'
        />
      <Link to='/login'
        className='btn btn-sm ml-3 btn-primary'
      >
        Login
      </Link>
      </form>
    </div>
  )
}
