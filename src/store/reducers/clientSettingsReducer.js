const defaultState = {
  screenHeight: window.innerHeight,
  screenWidth: window.innerWidth
};

export default function clientSettingsReducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
