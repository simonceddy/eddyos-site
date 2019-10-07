import React, { useState } from 'react';
import MenuButton from './MenuButton';
import MenuContainer from './MenuContainer';
import MenuItem from './MenuItem';

function Menu() {
  const [toggled, setToggled] = useState(false);

  // console.log('is toggled:', toggled);
  return (
    <div className="relative">
      <MenuButton onClick={() => setToggled(!toggled)} />
      {
        toggled
          ? (
            <div
              className="absolute z-50"
              style={{
                bottom: '50px'
              }}
            >
              <MenuContainer>
                <ul className="w-full">
                  <MenuItem
                    onClick={() => setToggled(false)}
                    to="/"
                  >
                    Testing
                  </MenuItem>
                  <MenuItem
                    onClick={() => setToggled(false)}
                    to="/text/about"
                  >
                    About
                  </MenuItem>
                  <MenuItem
                    onClick={() => setToggled(false)}
                    to="/text/services"
                  >
                    Services
                  </MenuItem>
                  <MenuItem
                    onClick={() => setToggled(false)}
                    to="/text/code"
                  >
                    code
                  </MenuItem>
                  <MenuItem
                    onClick={() => setToggled(false)}
                    to="/text/contact"
                  >
                    contact
                  </MenuItem>
                  <MenuItem
                    onClick={() => setToggled(false)}
                    to="/settings"
                  >
                    Settings
                  </MenuItem>
                </ul>
              </MenuContainer>
            </div>
          )
          : null
      }
    </div>
  );
}

export default Menu;
