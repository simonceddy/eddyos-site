import React, { useState } from 'react';
import style from 'styled-components';
// import theme from 'styled-theming';
import MenuButton from './MenuButton';
import MenuItems from './MenuItems';

const MenuContainer = style.div`
  &:hover > #menu-items {
    display: flex;
  }
  & > button:focus {
    display: flex;
  }
`;

function Menu() {
  const [menuToggled, setMenuToggled] = useState(false);

  return (
    <MenuContainer id="menu-container" className="relative z-50">
      {/* <div onPointerOut /> */}
      <MenuButton toggled={menuToggled} toggleMenu={setMenuToggled} />
      <MenuItems toggled={menuToggled} toggleMenu={setMenuToggled} />
    </MenuContainer>
  );
}

export default Menu;
