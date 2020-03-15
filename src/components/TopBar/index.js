import React from 'react';
import TaskBar from '../../shared/components/Layout/TaskBar';
import LeftSection from './LeftSection';
// import EddyOSButton from './EddyOSButton';
import HomeButton from './HomeButton';
import InfoButton from './InfoButton';

function TopBar({ children }) {
  return (
    <TaskBar className="border-b-2">
      <LeftSection>
        {/* <EddyOSButton /> */}
        <HomeButton />
        <InfoButton />
      </LeftSection>
      {children}
    </TaskBar>
  );
}

export default TopBar;
