import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Widget from '../shared/containers/Widget';
import Text from '../components/Text';
import textWindowHandler from '../storage/textWindowHandler';

const { setPos, setSize, state } = textWindowHandler();

function TextApp({ match }) {
  const { path } = match;
  console.log('text rendered');
  return (
    <Widget setPos={setPos} setSize={setSize} state={state}>
      <Switch>
        <Route
          path={`${path}/about`}
          render={() => (
            <Text title="About">
              About Simon
            </Text>
          )}
        />
        <Route
          path={`${path}/services`}
          render={() => (
            <Text title="Services">
              Services that Simon offers.
            </Text>
          )}
        />
        <Route
          path={`${path}/code`}
          render={() => (
            <Text title="Code Examples and Previous Work">
              Examples of code. Github links etc.
            </Text>
          )}
        />
        <Route
          path={`${path}/contact`}
          render={() => (
            <Text title="Contact Simon">
              Brief contact details
            </Text>
          )}
        />
        <Route
          render={() => (
            <Text>
            Test Content
            </Text>
          )}
        />
      </Switch>
    </Widget>
  );
}

export default withRouter(TextApp);
