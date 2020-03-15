import React from 'react';
import { FaHome as HomeIcon } from 'react-icons/all';
import TaskBarLink from '../../shared/components/TaskBarLink';

function HomeButton() {
  return (
    <TaskBarLink to="/" exact>
      <HomeIcon size="2rem" title="Home" />
    </TaskBarLink>
  );
}

export default HomeButton;
