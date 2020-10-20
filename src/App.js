import React, {useEffect, useState} from 'react';
import Tickets from './containers/tickets.js'
import Requests from './containers/requests.js'
import Account from './components/account.js'
import Login from './components/login.js'
import Signup from './components/signup.js'
import {BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom'
import './App.css';



function App() {
  const [auth, setAuth] = useState(false)
  useEffect(() => {
    fetch('https://aaronschuyler-togethr.herokuapp.com/check_session', {credentials: 'include'})
    .then(res => res.json())
    .then(json => {
      setAuth(json.success)
    })
  })

  const logout = () => {
    fetch('http://localhost:3000/logout', {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(res => setAuth(false))
  }

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
        <header className="Header navbar border-bottom mb-3">
          <h1 className='text-primary'>togethr</h1>
          <ul className='nav'>
            {auth &&
              <>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/tickets'>Your Tickets</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/requests'>Requests</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/account'>Your Account</NavLink>
              </li>
              <li className='nav-item'>
                <button className='nav-link pointer' onClick={logout}>Logout</button>
              </li>
              </>
            }
          </ul>
        </header>
        <Switch>
          <Route path='/login'>
            {auth ? <Redirect to='/requests' /> : <Login handleLogin={authenticate} />}
          </Route>
          <Route path='/signup'>
            {auth ? <Redirect to='/requests' /> : <Signup handleLogin={authenticate} />}
          </Route>
          <PrivateRoute path='/tickets'>
            <Tickets />
          </PrivateRoute>
          <PrivateRoute path='/requests'>
            <Requests />
          </PrivateRoute>
          <PrivateRoute path='/account'>
            <Account />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
