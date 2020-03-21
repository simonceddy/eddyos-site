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
  id: null,
  zIndex: null,
  Component: null,
  name: null,
  Icon: null,
  size: {
    height: 320,
    width: 360
  },
  position: {
    x: 0,
    y: 0
  }
};

export const createApplet = (props = {}) => ({
  ...defaultApplet,
  ...props,
});

export const settingsApplet = () => createApplet({
  id: 'settingsApp',
  Component: Settings,
  name: 'Settings',
  Icon: SettingsIcon
});

export const aboutApplet = () => createApplet({
  id: 'aboutApp',
  Component: About,
  name: 'About Simon',
  Icon: InfoIcon
});

export const workApplet = () => createApplet({
  id: 'workApp',
  Component: Work,
  name: 'Work',
  Icon: WorkIcon
});
