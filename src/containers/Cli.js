import React from 'react';
// import { withRouter } from 'react-router-dom';
// import CliWindow from './Windows/CliWindow';
import RndWrapper from '../shared/containers/RndWrapper';
import cliWindowHandler from '../storage/cliWindowHandler';
import CliApp from '../components/Cli/CliApp';

const {
  state,
  setPos,
  setSize
} = cliWindowHandler();

function Cli({ children, onClose }) {
  return (
    <RndWrapper
      containerState={state}
      title="eddyCLI"
      onClose={onClose}
      setPos={setPos}
      setSize={setSize}
    >
      <CliApp />
      {children}
    </RndWrapper>
  );
}

export default Cli;
