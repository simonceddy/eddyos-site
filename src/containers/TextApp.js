import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Widget from '../shared/containers/Widget';
import Text from '../components/Text';
import textWindowHandler from '../storage/textWindowHandler';
import Code from '../components/pages/Code';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Services from '../components/pages/Services';

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
            <About />
          )}
        />
        <Route
          path={`${path}/services`}
          render={() => (
            <Services />
          )}
        />
        <Route
          path={`${path}/code`}
          render={() => (
            <Code />
          )}
        />
        <Route
          path={`${path}/contact`}
          render={() => (
            <Contact />
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
