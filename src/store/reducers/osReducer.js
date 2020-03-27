import { combineReducers } from 'redux';
import appletsReducer from './appletsReducer';
import iconsReducer from './iconsReducer';

const osReducer = combineReducers({
  applets: appletsReducer,
  icons: iconsReducer
});

export default osReducer;
