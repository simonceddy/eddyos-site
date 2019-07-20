import React from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';
import { toggleMenu } from '../../os/reduxOs/actions/osActionCreators';

function Menu({ setToggle }) {
  return (
    <div className="menu text-2xl flex flex-col items-center justify-center text-center my-2 mx-auto">
      <MenuItem to="/text/about" onClick={setToggle} exact>About</MenuItem>
      <MenuItem to="/text/services" onClick={setToggle} exact>Services</MenuItem>
      <MenuItem to="/text/code" onClick={setToggle} exact>Code</MenuItem>
      <MenuItem to="/text/previousWork" onClick={setToggle} exact>Previous Work</MenuItem>
      <MenuItem to="/text/contact" onClick={setToggle} exact>Contact</MenuItem>
      <MenuItem to="/eddyos" onClick={setToggle} exact>eddyOS</MenuItem>
    </div>
  );
}

const mapActionsToProps = dispatch => ({
  setToggle: () => dispatch(toggleMenu())
});

export default connect(null, mapActionsToProps)(Menu);
