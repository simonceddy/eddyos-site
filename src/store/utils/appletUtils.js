export const setTopApplet = (applet, active = []) => [
  ...active.map((activeApplet) => {
    if (activeApplet.zIndex < applet.zIndex) {
      return { ...activeApplet };
    }
    if (activeApplet.Component === applet.Component) {
      return { ...activeApplet, zIndex: active.length + 9 };
    }
    return { ...activeApplet, zIndex: activeApplet.zIndex - 1 };
  })
];

export const appletIsActive = (applet, active = []) => undefined !== active.find(
  (activeApplet) => activeApplet.Component === applet.Component
);

export const prepareApplet = (applet, number) => ({
  ...applet,
  zIndex: 10 + number
});

export const resizeApplet = (applet, height, width) => ({
  ...applet,
  size: {
    height,
    width
  }
});

export const repositionApplet = (applet, x, y) => ({
  ...applet,
  position: {
    x,
    y
  }
});

export const loadAppletFromStorage = (id) => {
  const state = JSON.parse(localStorage.getItem(`eddyOs-${id}`));
  // console.log(state);
  return state;
};

export const storeApplet = (applet = {}) => {
  localStorage.setItem(`eddyOs-${applet.id}`, JSON.stringify({
    size: applet.size,
    position: applet.position
  }));
  // console.log(applet);
  return applet;
};
