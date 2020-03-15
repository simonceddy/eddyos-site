import React from 'react';
import StyledTaskBarLink from './Styled/StyledTaskBarLink';

function TaskBarLink({ to, exact = true, children }) {
  return (
    <StyledTaskBarLink to={to} exact={exact} className="m-1 font-mono text-xl">
      {children}
    </StyledTaskBarLink>
  );
}

export default TaskBarLink;
