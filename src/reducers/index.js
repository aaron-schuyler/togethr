import { combineReducers } from 'redux'
import tickets from './tickets.js'
import requests from './requests.js'


export default combineReducers({
  tickets,
  requests
})
