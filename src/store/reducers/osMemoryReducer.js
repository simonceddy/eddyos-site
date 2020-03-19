import { combineReducers } from 'redux';
import appletsReducer from './appletsReducer';

const osMemoryReducer = combineReducers({
  applets: appletsReducer
});

export default osMemoryReducer;
