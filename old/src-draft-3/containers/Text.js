import React, { useState } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
// import textWindowHandler from '../storage/textWindowHandler';
import RndWrapper from '../shared/containers/RndWrapper';
import textWindowHandler from '../storage/textWindowHandler';
import About from '../components/Pages/About';

const {
  state,
  setPos,
  setSize
} = textWindowHandler();

// eslint-disable-next-line no-unused-vars
function Text({ match, onClose }) {
  // console.log(match);
  const [title, setTitle] = useState('Text');
  const { path: basePath } = match;
  return (
    <RndWrapper
      containerState={state}
      title={title}
      onClose={onClose}
      setPos={setPos}
      setSize={setSize}
    >
      <Switch>
        <Route
          path={`${basePath}/about`}
          exact
          render={() => {
            setTitle('About');
            return (<About />);
          }}
        />
        <Route
          path={`${basePath}/contact`}
          exact
          render={() => {
            setTitle('Contact Simon');
            return (<div>Contact Simon</div>);
          }}
        />
        <Route
          path={`${basePath}/code`}
          exact
          render={() => {
            setTitle('Code Examples and Previous Work');
            return (<div>Code examples...</div>);
          }}
        />
        <Route
          render={() => {
            setTitle('Text');
            return (<div contentEditable />);
          }}
        />
      </Switch>
    </RndWrapper>
  );
}

export default withRouter(Text);
