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
          <ul>
            <li>
              <Link to='/tickets'>You</Link>
            </li>
            <li>
              <Link to='/requests'>Others</Link>
            </li>
            <li>
              <Link to='/account'>Your Account</Link>
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
