import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import clockReducer from './clockReducer';
import systemSettingsReducer from './systemSettingsReducer';

export default combineReducers({
  theme: themeReducer,
  clock: clockReducer,
  system: systemSettingsReducer
});
