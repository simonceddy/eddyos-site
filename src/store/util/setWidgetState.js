import { setInStorage } from '../../util/storageHelpers';
import updateObject from '../../util/updateObject';

const setWidgetState = (key, initialState, newState) => setInStorage(key, updateObject(
  initialState,
  newState
));

export default setWidgetState;
