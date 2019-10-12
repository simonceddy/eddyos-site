import React from 'react';
import StyledLink from '../../shared/components/StyledLink';

function MenuItem({
  children,
  to,
  exact = false,
  onClick
}) {
  return (
    <li className="w-full">
      <StyledLink
        to={to}
        exact={exact}
        className="block px-6 no-underline uppercase text-left"
        onClick={onClick}
      >
        {children}
      </StyledLink>
    </li>
  );
}

export default MenuItem;
