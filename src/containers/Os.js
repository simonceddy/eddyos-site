import React from 'react';
import theme from 'styled-theming';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import TopBar from './TopBar';
import InnerContainer from '../components/Layout/InnerContainer';
import Clock from './Clock';
// import Routes from './Routes';
import BottomBar from '../components/BottomBar';
import { colourMaps } from '../shared/themes';
import Home from './Home';
import Applets from './Applets';
import {
  addAppletToActive
} from '../store/actions';

const secondary = theme('mode', colourMaps.secondary);

function Os({ addApplet }) {
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
        <Home addApplet={addApplet} />
        <Applets />
      </InnerContainer>
      <BottomBar />
    </Layout>
  );
}


const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addApplet: (applet) => dispatch(addAppletToActive(applet)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Os);
