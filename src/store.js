import { applyMiddleware, createStore, combineReducers } from 'redux'
import logger from 'redux-logger'
import hotels from './reducers'

const store = createStore(
  combineReducers({ hotels }),
  applyMiddleware(
    logger
  )
)

export default store
