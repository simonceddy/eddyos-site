import React from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { HotKeys } from 'react-hotkeys';
import Desktop from './Desktop';
import Layout from './Layout';
import Software from './Software/Software';
import ModalWrapper from '../shared/components/ModalWrapper';
import MenuModal from './Menu/MenuModal';
import TextEditor from './Software/TextEditor/TextEditor';
// import WrappedErrorBox from './Errors/WrappedErrorBox';
import Error404 from './Errors/404';
import ConWrapper from './Software/ConEddy/ConWrapper';

function App({ toggled, os }) {
  return (
    <Layout>
      <HotKeys keyMap={os.keyMap} handlers={os.keyHandlers} className="flex flex-col flex-1">
        <Desktop>
          {toggled ? (
            <ModalWrapper>
              <MenuModal />
            </ModalWrapper>
          ) : null}
          <Switch>
            <Software
              path="/"
              exact
              render={() => null}
            />
            <Software
              path="/text/:page"
              exact
              render={props => (<TextEditor os={os} articleKey={props.match.params.page} />)
              }
            />
            <Software
              path="/cli"
              exact
              render={(() => (<ConWrapper os={os} />))}
            />
            <Software render={() => (<Error404 />)} />
          </Switch>
        </Desktop>
      </HotKeys>
    </Layout>
  );
}

// export default App;

function mapStateToProps(state) {
  return { toggled: state.os.menuToggled };
}

export default connect(mapStateToProps)(App);
