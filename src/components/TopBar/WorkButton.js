import React from 'react';
import { BsTools as WorkIcon } from 'react-icons/all';
import TaskBarLink from '../../shared/components/TaskBarLink';

function WorkButton() {
  return (
    <TaskBarLink to="/work" exact>
      <WorkIcon size="2rem" title="Simon's Work" />
    </TaskBarLink>
  );
}

export default WorkButton;
