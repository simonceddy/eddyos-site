import React from 'react';
import TaskBar from '../../shared/components/Layout/TaskBar';
import LeftSection from './LeftSection';
import EddyOSButton from './EddyOSButton';

function TopBar({ children }) {
  return (
    <TaskBar>
      <LeftSection>
        <EddyOSButton />
      </LeftSection>
      {children}
    </TaskBar>
  );
}

export default TopBar;
