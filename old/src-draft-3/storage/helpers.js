export function setInStorage(key, state) {
  localStorage.setItem(key, JSON.stringify(state));
}

export function getFromStorage(key, defaultState) {
  let result = localStorage.getItem(key);
  if (result === null) {
    setInStorage(key, defaultState);
    result = localStorage.getItem(key);
  }
  console.log(result);
  // console.log(defaultState, localStorage);
  return JSON.parse(result);
}
