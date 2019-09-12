import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Widget from '../shared/containers/Widget';
import Text from '../components/Text';
// import WidgetLayout from '../shared/components/WidgetLayout';

function TextApp({ match, history }) {
  // TODO fix excessive rendering
  const { path } = match;
  const onClose = () => history.push('/');
  console.log('TextApp rendered');
  return (
    <Widget>
      <Switch>
        <Route
          path={`${path}/about`}
          render={() => (
            <Text title="About" onClose={onClose}>
              About Simon
            </Text>
          )}
        />
        <Route
          path={`${path}/services`}
          render={() => (
            <Text title="Services" onClose={onClose}>
              Services that Simon offers.
            </Text>
          )}
        />
        <Route
          path={`${path}/code`}
          render={() => (
            <Text title="Code Examples and Previous Work" onClose={onClose}>
              Examples of code. Github links etc.
            </Text>
          )}
        />
        <Route
          path={`${path}/contact`}
          render={() => (
            <Text title="Contact Simon" onClose={onClose}>
              Brief contact details
            </Text>
          )}
        />
        <Route
          render={() => (
            <Text onClose={onClose}>
            Test Content
            </Text>
          )}
        />
      </Switch>
    </Widget>
  );
}

export default withRouter(TextApp);
