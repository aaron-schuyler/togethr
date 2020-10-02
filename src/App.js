import React, {useEffect, useState} from 'react';
import Tickets from './containers/tickets.js'
import Requests from './containers/requests.js'
import Login from './components/login.js'
import {BrowserRouter as Router, Switch, Route, Link, Redirect, location} from 'react-router-dom'
import './App.css';

const logout = () => {
  console.log('logging out')
}

function App() {
  const [auth, setAuth] = useState(false)
  useEffect(() => {
    fetch('http://localhost:3000/check_session', {credentials: 'include'})
    .then(res => res.json())
    .then(json => {
      setAuth(json.success)
    })
  })

  function PrivateRoute({children, ...rest}) {
    return (
      <Route
        {...rest}
        render={({location}) =>
          auth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: {from: location}
              }}
            />
          )
        }
      />
    )
  }
  const authenticate = (success) => {
      setAuth(success)
  }

  return (
    <div className="App">
      <Router>
        <header className="Header">
          <ul className='nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/tickets'>You</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/requests'>Others</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/account'>Your Account</Link>
            </li>
            <li className='nav-item'>
              <a className='nav-link pointer' onClick={logout}>Logout</a>
            </li>
          </ul>
        </header>
        <Switch>
          <Route path='/login'>
            {auth ? <Redirect to='/requests' /> : <Login handleLogin={authenticate} />}
          </Route>
          <PrivateRoute path='/tickets'>
            <Tickets />
          </PrivateRoute>
          <PrivateRoute path='/requests'>
            <Requests />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
