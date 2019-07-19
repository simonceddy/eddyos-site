import { combineReducers } from 'redux-starter-kit';
import osState from './osStateReducer';
import textEditor from './textEditorReducer';

const rootReducer = combineReducers({
  textEditor,
  osState
});

export default rootReducer;
