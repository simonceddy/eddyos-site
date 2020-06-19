import React from 'react';

function MutableSoftwareWindowContent(props) {
  console.log(props.children);

  return (
    <div className="bg-black text-green text-xl p-1">
      {/* {props.children} */}
      <textarea value={props.children} />
    </div>
  );
}

export default MutableSoftwareWindowContent;
