import {
  BsInfo as InfoIcon,
  BsTools as WorkIcon,
  GoSettings as SettingsIcon,
  MdEmail as ContactIcon,
  BsMusicPlayer as EddyTunesIcon,
  // BsFillTerminalFill as CliIcon,
} from 'react-icons/all';
import { loadAppletFromStorage } from '../../store/utils/appletUtils';
import Settings from '../../containers/Settings';
import About from '../../containers/About';
import Work from '../../containers/Work';
import Contact from '../../containers/Contact';
import EddyTunes from '../../containers/EddyTunes';

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

const applets = {
  settingsApplet: {
    id: 'settingsApplet',
    Component: Settings,
    name: 'Settings',
    Icon: SettingsIcon
  },
  aboutApplet: {
    id: 'aboutApplet',
    Component: About,
    name: 'About Simon',
    Icon: InfoIcon
  },
  workApplet: {
    id: 'workApplet',
    Component: Work,
    name: 'Work',
    Icon: WorkIcon
  },
  contactApplet: {
    id: 'contactApplet',
    Component: Contact,
    name: 'Contact Simon',
    Icon: ContactIcon
  },
  eddyTunesApplet: {
    id: 'eddyTunesApplet',
    Component: EddyTunes,
    name: 'eddyTunes',
    Icon: EddyTunesIcon,
    size: {
      height: 420,
      width: 560
    },
  }
};

export const createApplet = (id, props = {}) => {
  if (!applets[id]) return null;
  return {
    ...defaultApplet,
    ...applets[id],
    ...loadAppletFromStorage(id),
    ...props
  };
};
