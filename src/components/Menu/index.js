import React, { useState } from 'react';
import { connect } from 'react-redux';
import MenuButton from './MenuButton';
import MenuContainer from './MenuContainer';
import MenuItem from './MenuItem';
import { resetWidgets } from '../../store/actions/widgetActions';

function Menu({ resetAllWidgets }) {
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
                <button type="button" onClick={resetAllWidgets}>Reset Widgets</button>
              </MenuContainer>
            </div>
          )
          : null
      }
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  resetAllWidgets: () => dispatch(resetWidgets())
});

export default connect(() => ({}), mapDispatchToProps)(Menu);
