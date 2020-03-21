import React from 'react';
import TaskBar from '../shared/components/Layout/TaskBar';
import LeftSection from '../components/TopBar/LeftSection';
import EddyOSButton from '../components/TopBar/EddyOSButton';
import SecondaryButton from '../shared/components/Styled/SecondaryButton';

function TopBar({ children, applets, setTop }) {
  return (
    <TaskBar className="border-b-2">
      <LeftSection>
        <EddyOSButton />
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

export default TopBar;
