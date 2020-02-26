import { combineReducers } from 'redux'
import goals from './goals'
import level from './level'
import date from './date'

export default combineReducers({
  goals,
  level,
  date
})
