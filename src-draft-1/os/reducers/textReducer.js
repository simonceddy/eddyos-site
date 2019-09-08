import articles from '../../../storage/articles';
import {
  SET_TEXT_WINDOW_POS,
  SET_TEXT_WINDOW_SIZE
} from '../types/textActionTypes';
// import { getArticle } from '../selectors/textSelectors';


const initialState = {
  articles,
  x: null,
  y: null,
  width: null,
  height: null,
};

function textReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEXT_WINDOW_POS:
      return Object.assign({}, state, { height: action.height, width: action.width });
    case SET_TEXT_WINDOW_SIZE:
      return Object.assign({}, state, { x: action.x, y: action.y });
    default:
      return state;
  }
}

export default textReducer;
