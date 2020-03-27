import {
  BsInfo as InfoIcon,
  BsTools as WorkIcon,
  GoSettings as SettingsIcon,
  MdEmail as ContactIcon,
} from 'react-icons/all';
import { aboutApplet, workApplet, settingsApplet } from '../../shared/applets';

const defaultState = {
  applets: [
    {
      id: 'aboutSimon',
      name: 'About Simon',
      Icon: InfoIcon,
      loader: aboutApplet
    },
    {
      id: 'work',
      name: 'Work',
      Icon: WorkIcon,
      loader: workApplet
    },
    {
      name: 'Contact Simon',
      Icon: ContactIcon,
      id: 'contactSimon',
      loader: null
    },
  ]
};

export default function iconsReducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
