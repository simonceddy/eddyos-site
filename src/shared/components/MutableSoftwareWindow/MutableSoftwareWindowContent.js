import React from 'react';

function SoftwareWindowContent(props) {
  return (
    <div className="bg-black text-green text-xl p-1">
      {props.children}
      <textarea />
    </div>
  );
}

export default SoftwareWindowContent;
