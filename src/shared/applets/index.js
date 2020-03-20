import {
  BsInfo as InfoIcon,
  BsTools as WorkIcon,
  GoSettings as SettingsIcon,
  // MdEmail as ContactIcon,
} from 'react-icons/all';
import Settings from '../../containers/Settings';
import About from '../../containers/About';
import Work from '../../containers/Work';

const defaultApplet = {
  zIndex: null,
  Component: null,
  name: null,
  Icon: null,
};

export const createApplet = (props = {}) => ({
  ...defaultApplet,
  ...props,
});

export const settingsApplet = () => createApplet({
  Component: Settings,
  name: 'Settings',
  Icon: SettingsIcon
});

export const aboutApplet = () => createApplet({
  Component: About,
  name: 'About Simon',
  Icon: InfoIcon
});

export const workApplet = () => createApplet({
  Component: Work,
  name: 'Work',
  Icon: WorkIcon
});
