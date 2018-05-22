import { combineReducers } from 'redux'
import staffs from './staffs';
import locations from './locations'
import titles from './titles'

const rootReducer = combineReducers({
  staffs ,
  locations ,
  titles
});

export default rootReducer;