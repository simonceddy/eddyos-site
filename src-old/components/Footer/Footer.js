import React from 'react';
import FooterItem from './FooterItem';

function Footer() {
  return (
    <div className="footer">
      <FooterItem>Phone: 0402499551</FooterItem>
      <FooterItem>Email: <a href="mailto:simon@simoneddy.com.au" className="link">simon@simoneddy.com.au</a></FooterItem>
      <FooterItem>Github: <a href="https://github.com/simonceddy/" className="link">simonceddy</a></FooterItem>
    </div>
  );
}

export default Footer;
