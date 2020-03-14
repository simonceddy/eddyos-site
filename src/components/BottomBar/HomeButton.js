import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome as HomeIcon } from 'react-icons/all';

function HomeButton() {
  return (
    <NavLink
      to="/"
      exact
      className="p-1 font-mono text-xl"
    >
      <HomeIcon size="2rem" />
    </NavLink>
  );
}

export default HomeButton;
