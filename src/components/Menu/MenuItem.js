import React from 'react';
import StyledLink from '../../shared/components/StyledLink';

function MenuItem({ children, to, exact = false }) {
  return (
    <li className="w-full">
      <StyledLink
        to={to}
        exact={exact}
        className="block p-2 no-underline uppercase text-left"
      >
        {children}
      </StyledLink>
    </li>
  );
}

export default MenuItem;
