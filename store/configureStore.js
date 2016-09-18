import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import encoder from '../reducers/encoder'
import deflator from '../reducers/deflator'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    combineReducers({
      encoder,
      deflator,
      routing: routerReducer
    }),
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}