import React from 'react';
import {
  BsInfo as InfoIcon,
  BsTools as WorkIcon,
  GoSettings as SettingsIcon,
  MdEmail as ContactIcon,
} from 'react-icons/all';
import { connect } from 'react-redux';
import Icons from '../components/Icons';
import IconWrapper from './IconWrapper';
import Flex1Container from '../shared/components/Layout/Flex1Container';

function Home() {
  return (
    <Flex1Container className="z-0 w-full">
      <Icons>
        <IconWrapper Icon={InfoIcon} label="About Simon" to="about" />
        <IconWrapper Icon={WorkIcon} label="Simon's Work" to="work" />
        <IconWrapper Icon={SettingsIcon} label="Settings" to="settings" />
        <IconWrapper Icon={ContactIcon} label="Contact Simon" to="contact" />
      </Icons>
    </Flex1Container>
  );
}

const mapStateToProps = (state) => ({
  iconSize: state.system.homeIconSize
});

export default connect(mapStateToProps)(Home);
