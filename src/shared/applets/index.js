import {
  BsInfo as InfoIcon,
  BsTools as WorkIcon,
  GoSettings as SettingsIcon,
  // MdEmail as ContactIcon,
} from 'react-icons/all';
import Settings from '../../containers/Settings';
import About from '../../containers/About';
import Work from '../../containers/Work';

export const settingsApplet = () => ({
  Component: Settings,
  name: 'Settings',
  Icon: SettingsIcon,
  zIndex: null,
});

export const aboutApplet = () => ({
  Component: About,
  name: 'About Simon',
  Icon: InfoIcon,
  zIndex: null,
});

export const workApplet = () => ({
  Component: Work,
  name: 'Work',
  Icon: WorkIcon,
  zIndex: null,
});
