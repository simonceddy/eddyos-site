import React from 'react';
import {
  BsInfo as InfoIcon,
  GoSettings as SettingsIcon
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
        <IconWrapper Icon={SettingsIcon} label="Settings" to="settings" />
      </Icons>
    </Flex1Container>
  );
}

const mapStateToProps = (state) => ({
  iconSize: state.system.homeIconSize
});

export default connect(mapStateToProps)(Home);
