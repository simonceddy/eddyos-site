import { createStore } from 'redux';
// import toArray from 'lodash/toArray';
import rootReducer from './reducers';
// import { toggleMenu } from './actions/osActionCreators';
import { getArticle } from './selectors/textSelectors';

function Kernel() {
  const store = createStore(rootReducer);

  this.getStore = () => store;

  // console.log(store.getState());

  // const unsubscribe = store.subscribe(() => console.log(store.getState()));
  console.log(getArticle(store.getState(), 'contact'));
  // store.dispatch(toggleMenu(!store.getState().os.menuToggled));

  // unsubscribe();

  // console.log(toArray(store.getState().text.articles));
}

export default Kernel;
