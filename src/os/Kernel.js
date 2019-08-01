import DesktopManager from './DesktopManager';

export default function Kernel() {
  const bindings = {};

  this.desktop = new DesktopManager();

  this.register = (binding, concrete) => {
    switch (binding) {
      case 'textWindow':
        if (typeof concrete === 'object') {
          this.desktop.bindTextWindowHandler(concrete);
        }
        break;
      case 'settingsWindow':
        if (typeof concrete === 'object') {
          this.desktop.bindSettingsWindowHandler(concrete);
        }
        break;
      default:
        bindings[binding] = concrete || binding;
    }
  };

  this.loadBinding = (binding) => {
    switch (binding) {
      case 'settingsWindow':
        return this.desktop.getWindowHandlers('settings');
      case 'textWindow':
        return this.desktop.getWindowHandlers('text');
      default:
        return bindings[binding] || false;
    }
  };
}
