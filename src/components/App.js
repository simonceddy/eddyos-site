import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import Desktop from './Desktop';
import Layout from './Layout';
import Software from './Software/Software';
import ModalWrapper from '../shared/components/ModalWrapper';
import MenuModal from './Menu/MenuModal';
import TextEditor from './Software/TextEditor/TextEditor';
import WrappedErrorBox from './Errors/WrappedErrorBox';
import Error404 from './Errors/404';

function App({ os }) {
  const [toggled, setToggled] = useState(false);

  const [windowPos, setWindowPos] = useState({ x: 20, y: 20 });
  const [windowSize, setWindowSize] = useState({ width: 360, height: 320 });

  const toggler = () => {
    setToggled(!toggled);
  };

  const errWindow = (props, callback) => (
    <WrappedErrorBox
      pos={windowPos}
      setPos={setWindowPos}
      size={windowSize}
      setSize={setWindowSize}
      {...props}
    >
      {callback()}
    </WrappedErrorBox>
  );

  return (
    <Layout
      toggled={toggled}
      toggler={toggler}
    >
      <Desktop>
        {toggled ? (
          <ModalWrapper toggled={toggled} toggler={toggler}>
            <MenuModal toggler={toggler} />
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
            render={(props) => {
              // get article
              const article = os.fs.load(`articles.${props.match.params.page}`);
              if (!article) {
                return (
                  <WrappedErrorBox
                    pos={windowPos}
                    setPos={setWindowPos}
                    size={windowSize}
                    setSize={setWindowSize}
                  >
                    <Error404 />
                  </WrappedErrorBox>
                );
              }
              return (
                <TextEditor
                  pos={windowPos}
                  setPos={setWindowPos}
                  size={windowSize}
                  setSize={setWindowSize}
                  article={article}
                  {...props}
                />
              );
            }}
          />
          <Software
            render={(props) => { errWindow(props, () => (<Error404 />)) }}
          />
        </Switch>
      </Desktop>
    </Layout>
  );
}

export default App;

/*
App.propTypes = {
  toggled: bool.isRequired
};

function mapStateToProps(state) {
  return { toggled: state.osState.menuToggled };
}

export default connect(mapStateToProps)(App); */
