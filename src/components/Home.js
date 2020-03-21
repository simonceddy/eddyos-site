import React from 'react';
import {
  BsInfo as InfoIcon,
  BsTools as WorkIcon,
  GoSettings as SettingsIcon,
  MdEmail as ContactIcon,
} from 'react-icons/all';
import {
  settingsApplet,
  workApplet,
  aboutApplet
} from '../shared/applets';
import Icons from './Icons';
import Flex1Container from '../shared/components/Layout/Flex1Container';
import Icon from '../shared/components/Icons/Icon';

function Home({ addApplet }) {
  return (
    <Flex1Container className="z-0 w-full h-full">
      <Icons>
        <Icon
          Component={InfoIcon}
          label="About Simon"
          onClick={() => addApplet(aboutApplet())}
        />
        <Icon
          Component={WorkIcon}
          label="Simon's Work"
          onClick={() => addApplet(workApplet())}
        />
        <Icon
          Component={SettingsIcon}
          label="Settings"
          onClick={() => addApplet(settingsApplet())}
        />
        <Icon Component={ContactIcon} label="Contact Simon" />
      </Icons>
    </Flex1Container>
  );
}
export default Home;
