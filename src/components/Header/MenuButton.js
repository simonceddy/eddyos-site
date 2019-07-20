import React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../../os/reduxOs/actions/osActionCreators';

function MenuButton({ setToggle }) {
  return (
    <button type="button" className="menu-button text-3xl" onClick={setToggle}>
      <span className="m-2">Menu</span>
    </button>
  );
}

/* const mapStateToProps = state => ({
  toggled: state.os.menuToggled
}); */

const mapActionsToProps = dispatch => ({
  setToggle: () => dispatch(toggleMenu())
});

export default connect(null, mapActionsToProps)(MenuButton);
