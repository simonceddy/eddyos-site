import React from 'react';
import { bool, func } from 'prop-types';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function Layout({ toggled, toggler, children }) {
  return (
    <div className="app flex flex-col justify-center items-center w-full min-h-full text-green bg-black p-1" id="container">
      <div className="flex-1 flex flex-col justify-center items-center border border-green-dark w-full mb-1" id="content">
        <Header toggler={toggler} toggled={toggled} />
        {children}
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  toggled: bool.isRequired,
  toggler: func.isRequired,
};

export default Layout;
