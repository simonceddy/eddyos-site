import { combineReducers } from 'redux';
import textWidgetReducer from './textWidgetReducer';
import settingsWidgetReducer from './settingsWidgetReducer';
import activeWidgetReducer from './activeWidgetReducer';
import cliWidgetReducer from './cliWidgetReducer';

export default combineReducers({
  text: textWidgetReducer,
  settings: settingsWidgetReducer,
  cli: cliWidgetReducer,
  activeWidgets: activeWidgetReducer,
});
