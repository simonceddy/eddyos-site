import {
  BsInfo as InfoIcon,
  BsTools as WorkIcon,
  MdEmail as ContactIcon,
  BsMusicPlayer as EddyTunesIcon,
  BsFillTerminalFill as CliIcon,
} from 'react-icons/all';

const defaultState = {
  applets: [
    {
      id: 'aboutApplet',
      name: 'About Simon',
      Icon: InfoIcon,
    },
    {
      id: 'workApplet',
      name: 'Work',
      Icon: WorkIcon,
    },
    {
      name: 'Contact Simon',
      Icon: ContactIcon,
      id: 'contactApplet',
    },
    {
      name: 'eddyTunes',
      Icon: EddyTunesIcon,
      id: 'eddyTunesApplet',
    },
    {
      name: 'conEddy',
      Icon: CliIcon,
      id: 'conEddyApplet',
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
