import { combineReducers } from 'redux';
import textWidgetReducer from './textWidgetReducer';
import settingsWidgetReducer from './settingsWidgetReducer';
import activeWidgetReducer from './activeWidgetReducer';
import cliWidgetReducer from './cliWidgetReducer';
import widgetReducer from './widgetReducer';
import zIndexReducer from './zIndexReducer';

export default combineReducers({
  text: textWidgetReducer,
  settings: settingsWidgetReducer,
  cli: cliWidgetReducer,
  activeWidgets: activeWidgetReducer,
  widgets: widgetReducer,
  levels: zIndexReducer
});
