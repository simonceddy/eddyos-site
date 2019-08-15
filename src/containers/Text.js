import React, { useState } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
// import textWindowHandler from '../storage/textWindowHandler';
import RndWrapper from '../shared/components/RndWrapper';
import textWindowHandler from '../storage/textWindowHandler';

const {
  state,
  setPos,
  setSize
} = textWindowHandler();

// eslint-disable-next-line no-unused-vars
function Text({ match, history, location }) {
  const [title, setTitle] = useState('Text');
  const { path: basePath } = match;
  // console.log(location);
  return (
    <RndWrapper
      containerState={state}
      title={title}
      onClose={() => history.push('/')}
      setPos={setPos}
      setSize={setSize}
    >
      <Switch>
        <Route path={`${basePath}/test`} exact render={() => (<div>Text Test</div>)} />
        <Route
          path={`${basePath}/about`}
          exact
          render={() => {
            setTitle('About');
            return (<div>About Simon</div>);
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
        <Route render={() => (<div>Text</div>)} />
      </Switch>
    </RndWrapper>
  );
}

export default withRouter(Text);
