import { getFromStorage, setInStorage } from './helpers';

const windowStorage = (key, initialState) => {
  const state = getFromStorage(key, initialState);

  const setPos = ({ x, y }) => {
    // TODO validate x and y
    // console.log(x, y);
    state.x = x;
    state.y = y;
    setInStorage(key, state);
  };

  const setSize = ({ width, height }) => {
    // TODO validate width and height
    // console.log(width, height);
    state.width = width;
    state.height = height;
    setInStorage(key, state);
  };

  return {
    state,
    setPos,
    setSize
  };
};

export default windowStorage;
