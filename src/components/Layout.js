import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function Layout(props) {
  const { menuToggled } = props;
  return (
    <div className="app flex flex-col justify-center items-center w-full min-h-full text-green bg-black p-1" id="container">
      <div className="flex-1 flex flex-col justify-center items-center border border-green-dark w-full mb-1" id="content">
        {menuToggled ? (<div>Menu</div>) : ('')}
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  menuToggled: bool.isRequired
};

function mapStateToProps(state) {
  return { menuToggled: state.osState.menuToggled };
}

export default connect(mapStateToProps)(Layout);
