export const getWidth = (defaultWidth = 224) => {
  if (defaultWidth > 1100 && window.innerWidth > 1100) {
    return 800;
  }
  if (defaultWidth > 900 && window.innerWidth > 900) {
    return 550;
  }
  if (defaultWidth > 600 && window.innerWidth > 600) {
    return 300;
  }
  if (defaultWidth > 300 && window.innerWidth > 300) {
    return 224;
  }
  return defaultWidth;
};

export const getHeight = (defaultHeight = 100) => {
  if (defaultHeight > 900 && window.innerHeight > 900) {
    return 700;
  }
  if (defaultHeight > 700 && window.innerHeight > 700) {
    return 500;
  }
  if (defaultHeight > 400 && window.innerHeight > 400) {
    return 250;
  }
  return defaultHeight;
};
