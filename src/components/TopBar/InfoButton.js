import React from 'react';
import { BsInfo as InfoIcon } from 'react-icons/all';
import TaskBarLink from '../../shared/components/TaskBarLink';

function InfoButton() {
  return (
    <TaskBarLink to="/about" exact>
      <InfoIcon size="2rem" title="About Simon" />
    </TaskBarLink>
  );
}

export default InfoButton;
