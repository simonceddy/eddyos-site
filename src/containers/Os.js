import React from 'react';
import theme from 'styled-theming';
import Layout from '../components/Layout';
import TopBar from '../components/TopBar';
import InnerContainer from '../components/Layout/InnerContainer';
import Clock from './Clock';
import Routes from './Routes';
import BottomBar from '../components/BottomBar';
import { colourMaps } from '../shared/themes';

const secondary = theme('mode', colourMaps.secondary);

function Os() {
  return (
    <Layout>
      <TopBar>
        <Clock
          format="hh-mm"
          style={{
            color: secondary
          }}
        />
      </TopBar>
      <InnerContainer>
        <Routes />
      </InnerContainer>
      <BottomBar />
    </Layout>
  );
}

export default Os;
