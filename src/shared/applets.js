import Settings from '../containers/Settings';
import About from '../containers/About';
import Work from '../containers/Work';

export const settingsApplet = () => ({
  Component: Settings,
  name: 'Settings'
});

export const aboutApplet = () => ({
  Component: About,
  name: 'About Simon'
});

export const workApplet = () => ({
  Component: Work,
  name: 'Work'
});
