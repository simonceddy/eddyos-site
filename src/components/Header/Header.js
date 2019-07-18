import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';
// import { toggleMenu } from '../../actions/osStateActions';
import MenuButton from './MenuButton';

function Header({ toggler, toggled }) {
  return (
    <div className="flex flex-row justify-between items-center mx-2 mt-1 w-full">
      <MenuButton toggle={toggler} toggled={toggled} />
      <Link to="/" className="link no-underline">
        <h1 className="text-5xl mx-2">
          Simon Eddy
        </h1>
      </Link>
    </div>
  );
}

Header.propTypes = {
  toggler: func.isRequired,
  toggled: bool.isRequired
};

export default connect(/* state => ({
  toggled: state.osState.menuToggled
}) */)(Header);
