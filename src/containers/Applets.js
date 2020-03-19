import React from 'react';
import { connect } from 'react-redux';
import Applet from '../components/Applets/Applet';
import ErrorBoundary from '../shared/components/ErrorBoundary';
import { removeAppletFromActive } from '../store/actions';

function Applets({ applets = [], closeApplet }) {
  return (
    <ErrorBoundary>
      <div className="absolute">
        {applets.map((applet = {}, key) => {
          const { Component, name } = applet;
          return (
            <Applet
              key={key}
              name={name}
              onClose={() => closeApplet(applet)}
            >
              <Component />
            </Applet>
          );
        })}
      </div>
    </ErrorBoundary>
  );
}

const mapStateToProps = (state) => ({ applets: state.applets.active });

const mapDispatchToProps = (dispatch) => ({
  closeApplet: (applet) => dispatch(removeAppletFromActive(applet))
});

export default connect(mapStateToProps, mapDispatchToProps)(Applets);
