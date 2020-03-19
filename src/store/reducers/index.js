import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import clockReducer from './clockReducer';
import systemSettingsReducer from './systemSettingsReducer';
import clientSettingsReducer from './clientSettingsReducer';
// import osMemoryReducer from './osMemoryReducer';
import appletsReducer from './appletsReducer';

export default combineReducers({
  theme: themeReducer,
  clock: clockReducer,
  system: systemSettingsReducer,
  client: clientSettingsReducer,
  applets: appletsReducer,
});
