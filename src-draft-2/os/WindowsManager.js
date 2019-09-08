export default function WindowsManager() {
  // eslint-disable-next-line no-unused-vars
  const windows = [];

  this.addWindow = handlers => windows.push(handlers);

  this.getAll = () => windows;

  this.hasWindow = name => windows.findIndex(win => name === win.name) >= 0;

  this.getWindow = name => windows.find(win => name === win.name);

  this.nextWindowId = () => windows.length;

  this.toggleWindow = (name) => {
    const key = this.hasWindow(name);
    if (key >= 0) {
      windows[key].toggled = !windows[key].toggled;
    }
  };
}
