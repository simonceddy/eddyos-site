import React from 'react';
import { withRouter } from 'react-router-dom';
// import CliWindow from './Windows/CliWindow';
import RndWrapper from '../shared/components/RndWrapper';
import cliWindowHandler from '../storage/cliWindowHandler';

const {
  state,
  setPos,
  setSize
} = cliWindowHandler();

function Cli({ history, children }) {
  return (
    <RndWrapper
      containerState={state}
      title="TESTING"
      onClose={() => history.push('/')}
      setPos={setPos}
      setSize={setSize}
    >
      {children}
    </RndWrapper>
  );
}

export default withRouter(Cli);
