import { combineReducers } from 'redux';
import checkerReducer from './checkerReduser';

const rootReducer = combineReducers({
  board: checkerReducer
})

export default rootReducer;