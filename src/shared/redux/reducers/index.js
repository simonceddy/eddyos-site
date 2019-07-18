import { combineReducers } from 'redux-starter-kit';
import osState from './osStateReducer';

const rootReducer = combineReducers({
  osState
});

export default rootReducer;
