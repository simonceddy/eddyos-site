import React from 'react';

function FooterItem(props) {
  return (
    <div className="mx-2">
      {props.children}
    </div>
  );
}

export default FooterItem;
