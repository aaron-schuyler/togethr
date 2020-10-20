import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function NewTicket(props) {
  const [loginData, setLoginData] = useState('')

  const submit = (e) => {
    e.preventDefault()
    fetch('https://aaronschuyler-togethr.herokuapp.com/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body:  JSON.stringify(loginData)
    })
    .then(res => res.json())
    .then(json => props.handleLogin(json.success))
  }

  return (
    <div className='card w-25 p-3 m-auto'>
      <h2>Sign In</h2>
      <form onSubmit={submit}>
        <input
          required
          name='username'
          className='form-control mb-3'
          placeholder='Username'
          onChange={e => setLoginData({...loginData, username: e.target.value})}
        />
        <input
          required
          type='password'
          name='password'
          className='form-control mb-3'
          placeholder='Password'
          onChange={e => setLoginData({...loginData, password: e.target.value})}
        />
        <input
          type='submit'
          value='Login'
          className='btn btn-sm btn-success'
        />
      <Link to='/signup'
        className='btn btn-sm ml-3 btn-primary'
      >
        Signup
      </Link>
      </form>
    </div>
  )
}
