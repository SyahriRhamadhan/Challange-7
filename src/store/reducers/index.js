import { combineReducers } from 'redux'
import carsReducer from './carsReducer'

export default combineReducers({
  carsList: carsReducer
})