import React from 'react';
import AriaModal from 'react-aria-modal';

function ModalWrapper(props) {
  return (
    <AriaModal {...props}>
      {props.children}
    </AriaModal>
  );
}

export default ModalWrapper;
