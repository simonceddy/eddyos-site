import React, { useState } from 'react';
import {
  GoSettings as SettingsIcon
} from 'react-icons/all';
import { connect } from 'react-redux';
import TaskBar from '../../shared/components/Layout/TaskBar';
import LeftSection from './LeftSection';
import EddyOSButton from './EddyOSButton';
import SecondaryButton from '../../shared/components/Styled/SecondaryButton';
import Menu from '../Menu';
import MenuItem from '../Menu/MenuItem';
import { addAppletToActive } from '../../store/actions';
import { settingsApplet } from '../../shared/applets';

function TopBar({
  children,
  applets,
  setTop,
  openSettings
}) {
  const [menuToggled, setMenuToggled] = useState(false);

  return (
    <TaskBar className="border-b-2">
      <LeftSection>
        <div className="relative">
          <EddyOSButton
            onClick={() => {
              console.log('clicked eddyos button');
              setMenuToggled(!menuToggled);
            }}
          />
          <Menu toggled={menuToggled}>
            <MenuItem
              Icon={SettingsIcon}
              onClick={
                () => {
                  openSettings();
                  console.log('here');
                  setMenuToggled(false);
                }
              }
            >
              Settings
            </MenuItem>
          </Menu>
        </div>
        <div className="flex flex-row justify-start items-center">
          {applets.map((applet, key) => {
            const { Icon, name } = applet;
            return (
              <SecondaryButton key={key} onClick={() => setTop(applet)}>
                <Icon title={name} size="1.7rem" />
              </SecondaryButton>
            );
          })}
        </div>
      </LeftSection>
      {children}
    </TaskBar>
  );
}

const mapDispatchToProps = (dispatch) => ({
  openSettings: () => dispatch(addAppletToActive(settingsApplet()))
});

export default connect(() => ({}), mapDispatchToProps)(TopBar);
