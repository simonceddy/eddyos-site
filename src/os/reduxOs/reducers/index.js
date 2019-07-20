import { combineReducers } from 'redux';
import osReducer from './osReducer';
// import textReducer from './textReducer';
import articleReducer from './articleReducer';
import windowsReducer from './windowsReducer';

const rootReducer = combineReducers({
  os: osReducer,
  // text: textReducer,
  article: articleReducer,
  windows: windowsReducer
});

export default rootReducer;
