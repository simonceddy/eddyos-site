import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleMenu } from '../../actions/osStateActions';
import MenuButton from './MenuButton';

function Header({ dispatch, toggled }) {
  const toggle = (toggler) => {
    dispatch(toggleMenu({
      osState: {
        menuToggled: toggler
      }
    }));
  };

  return (
    <div className="flex flex-row justify-between items-center mx-2 mt-1 w-full">
      <MenuButton toggle={toggle} toggled={toggled} />
      <Link to="/" className="link no-underline">
        <h1 className="text-5xl mx-2">
          Simon Eddy
        </h1>
      </Link>
    </div>
  );
}

export default connect(state => ({
  toggled: state.osState.menuToggled
}))(Header);
