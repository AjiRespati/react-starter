
import { combineReducers } from 'redux'
import system from './SystemReducer'
import service from './ServiceReducer'
import response from './ResponseReducer'

const appReducers = combineReducers({
  system,
  service,
  response,
})

export default appReducers