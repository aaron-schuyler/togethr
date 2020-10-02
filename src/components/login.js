import React, {useState, useEffect} from 'react'

export default function NewTicket(props) {
  const [loginData, setLoginData] = useState('')

  const submit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
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
        placeholder='password'
        onChange={e => setLoginData({...loginData, password: e.target.value})}
      />
      <input
        type='submit'
        value='Login'
        className='btn btn-sm btn-success'
      />
    </form>
  )
}
