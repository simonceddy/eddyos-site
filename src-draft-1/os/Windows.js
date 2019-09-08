function WindowManager() {
  const windowDimensions = {
    text: {}
  };

  const windowPositions = {
    text: {}
  };

  this.getWindowDim = name => windowDimensions[name] || false;

  this.getWindowPos = name => windowPositions[name] || false;
}

export default WindowManager;
