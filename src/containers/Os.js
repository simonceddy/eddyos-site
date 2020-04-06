import React from 'react';
import theme from 'styled-theming';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import TopBar from '../components/TopBar';
import InnerContainer from '../components/Layout/InnerContainer';
import Clock from './Clock';
// import Routes from './Routes';
import BottomBar from '../components/BottomBar';
import Home from '../components/Home';
import Applets from './Applets';
import {
  addAppletToActive,
  removeAppletFromActive,
  setAppletTop
} from '../store/actions';

function Os({
  addApplet,
  applets,
  closeApplet,
  setTop,
  icons
}) {
  return (
    <Layout>
      <TopBar setTop={setTop} applets={applets}>
        <Clock />
      </TopBar>
      <InnerContainer>
        <Home addApplet={addApplet} icons={icons} />
        <Applets applets={applets} closeApplet={closeApplet} />
      </InnerContainer>
      <BottomBar />
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  applets: state.os.applets.active,
  icons: state.os.icons.applets,
});

const mapDispatchToProps = (dispatch) => ({
  addApplet: (applet) => dispatch(addAppletToActive(applet)),
  closeApplet: (applet) => dispatch(removeAppletFromActive(applet)),
  setTop: (applet) => dispatch(setAppletTop(applet)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Os);
