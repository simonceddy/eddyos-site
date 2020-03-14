import React from 'react';
import Layout from '../components/Layout';
import TopBar from '../components/TopBar';
import InnerContainer from '../components/Layout/InnerContainer';
import Clock from './Clock';
import Routes from './Routes';
import BottomBar from '../components/BottomBar';

function Os() {
  return (
    <Layout>
      <TopBar>
        <Clock
          format="hh-mm"
          style={{
            color: 'black'
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
