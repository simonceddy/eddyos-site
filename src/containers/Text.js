import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
// import textWindowHandler from '../storage/textWindowHandler';
import RndWrapper from '../shared/components/RndWrapper';
import textWindowHandler from '../storage/textWindowHandler';

const {
  state,
  setPos,
  setSize
} = textWindowHandler();

function Text({ match, history }) {
  const { path: basePath } = match;
  console.log(history);
  return (
    <RndWrapper
      containerState={state}
      title="Text"
      onClose={() => history.push('/')}
      setPos={setPos}
      setSize={setSize}
    >
      <Switch>
        <Route path={`${basePath}/test`} exact render={() => (<div>Text Test</div>)} />
        <Route render={() => (<div>Text</div>)} />
      </Switch>
    </RndWrapper>
  );
}

export default withRouter(Text);
