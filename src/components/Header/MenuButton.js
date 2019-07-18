import React from 'react';
import { func, bool } from 'prop-types';

function MenuButton({ toggle, toggled }) {
  return (
    <button type="button" className="menu-button text-3xl" onClick={() => toggle(!toggled)}>
      <span className="m-2">Menu</span>
    </button>
  );
}

MenuButton.propTypes = {
  toggle: func.isRequired,
  toggled: bool.isRequired,
};

export default MenuButton;
