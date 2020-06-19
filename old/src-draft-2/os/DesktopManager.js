import WindowsManager from './WindowsManager';

export default function DesktopManager() {
  // eslint-disable-next-line no-unused-vars
  const windows = new WindowsManager();

  this.bindTextWindowHandler = (textWindowHandlers = {}) => {
    if (!windows.hasWindow('text')) {
      const winHandlers = Object.assign({}, textWindowHandlers, {
        name: 'text',
        id: windows.nextWindowId()
      });
      windows.addWindow(winHandlers);
    }
    console.log(windows.getAll());
  };

  this.bindSettingsWindowHandler = (settingsWindowHandlers = {}) => {
    if (!windows.hasWindow('settings')) {
      const winHandlers = Object.assign({}, settingsWindowHandlers, {
        name: 'settings',
        id: windows.nextWindowId()
      });
      windows.addWindow(winHandlers);
    }
  };

  this.bindCliWindowHandler = (cliWindowHandlers = {}) => {
    if (!windows.hasWindow('cli')) {
      const winHandlers = Object.assign({}, cliWindowHandlers, {
        name: 'cli',
        id: windows.nextWindowId()
      });
      windows.addWindow(winHandlers);
    }
  };

  this.getWindowHandlers = type => windows.getWindow(type);

  this.getWindows = () => windows.getAll();
}
