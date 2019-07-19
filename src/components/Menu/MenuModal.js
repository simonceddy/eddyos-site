import React from 'react';
import Menu from './Menu';

function MenuModal({ toggler }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Menu toggler={toggler} />
    </div>
  );
}

export default MenuModal;
