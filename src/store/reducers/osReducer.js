import { combineReducers } from 'redux';
import appletsReducer from './appletsReducer';

const osReducer = combineReducers({
  applets: appletsReducer
});

export default osReducer;
