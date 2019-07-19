import React from 'react';
import { Switch, Route as Software } from 'react-router-dom';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import Desktop from '../shared/components/Desktop';
import Layout from './Layout';
import ModalWrapper from '../shared/components/ModalWrapper';
import MenuModal from './Menu/MenuModal';
import TextEditor from './Software/TextEditor/TextEditor';
import { toggleMenu } from '../actions/osStateActions';
import { getArticle } from '../actions/textEditorActions';

function App({ dispatch, toggled }) {
  const toggler = () => {
    dispatch(toggleMenu({ menuToggled: !toggled }));
  };

  return (
    <Layout
      toggled={toggled}
      toggler={toggler}
    >
      <Desktop>
        {toggled ? (
          <ModalWrapper toggled={toggled} toggler={toggler}>
            <MenuModal />
          </ModalWrapper>
        ) : null}
        <Switch>
          <Software path="/" exact render={() => (<div className="text-5xl">Welcome</div>)} />
          <Software
            path="/text/:page"
            exact
            render={({ match }) => {
              const article = dispatch(getArticle({ page: match.params.page }));
              console.log(article.payload);
              if (!article) return (<div>404</div>);
              return (<TextEditor article={article} />);
            }}
          />
          <Software render={() => (<div>404</div>)} />
        </Switch>
      </Desktop>
    </Layout>
  );
}


App.propTypes = {
  toggled: bool.isRequired
};

function mapStateToProps(state) {
  return { toggled: state.osState.menuToggled };
}

export default connect(mapStateToProps)(App);
