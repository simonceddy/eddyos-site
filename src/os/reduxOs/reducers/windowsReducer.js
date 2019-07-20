// import articles from '../../../storage/articles';
import {
  SET_TEXT_WINDOW_POS,
  SET_TEXT_WINDOW_SIZE
} from '../types/windowsActionTypes';
// import { getArticle } from '../selectors/textSelectors';


const initialState = {
  text: {
    x: 20,
    y: 20,
    width: 350,
    height: 320,
  }
};

function windowsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEXT_WINDOW_POS:
      return Object.assign({}, state, { text: { height: action.height, width: action.width } });
    case SET_TEXT_WINDOW_SIZE:
      return Object.assign({}, state, { text: { x: action.x, y: action.y } });
    default:
      return state;
  }
}

export default windowsReducer;
