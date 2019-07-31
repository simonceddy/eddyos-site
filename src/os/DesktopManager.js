export default function DesktopManager() {
  const handlers = {};

  this.bindTextWindowHandler = (textWindowHandlers = {}) => {
    if (handlers.text === undefined) {
      handlers.text = textWindowHandlers;
    }
    // console.log(handlers);
  };

  this.bindSettingsWindowHandler = (settingsWindowHandlers = {}) => {
    if (handlers.settings === undefined) {
      handlers.settings = settingsWindowHandlers;
    }
  };

  this.getWindowHandlers = type => handlers[type] || false;
}
