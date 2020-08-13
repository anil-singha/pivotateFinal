import { combineReducers } from 'redux';

import appDetailsReducer from './appCreateInfo/appDetails.reducer';

export default combineReducers({
  appDetails: appDetailsReducer,
});
