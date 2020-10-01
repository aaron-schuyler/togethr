import React from 'react';
import Tickets from './containers/tickets.js'
import Requests from './containers/requests.js'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css';

function App() {
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
          </ul>
        </header>
        <Switch>
          <Route path='/tickets'>
            <Tickets />
          </Route>
          <Route path='/requests'>
            <Requests />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
