import { combineReducers } from 'redux';
import counterReducer from './counter';
import currentUser from './currentUser';

const allReducers = combineReducers({
  counter: counterReducer,
  currentUser,
});

export default allReducers;
