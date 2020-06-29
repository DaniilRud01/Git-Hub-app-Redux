import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import allReducers from './data'

const createRootReducer = (history) =>
  combineReducers({
    data: allReducers,
    router: connectRouter(history)
  })

export default createRootReducer
