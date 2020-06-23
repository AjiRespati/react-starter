
import { createStore } from 'redux';
import appReducers from './module/CombineReducers'

const store = createStore(appReducers)

export default store