import React from 'react';
import Modal from 'react-responsive-modal';
import { func, bool } from 'prop-types';

function ModalWrapper({
  toggled,
  setToggle,
  children,
  classNames = {
    modal: ['bg-black']
  }
}) {
  return (
    <Modal
      classNames={classNames}
      center
      open={toggled}
      onClose={setToggle}
      showCloseIcon={false}
    >
      {children}
    </Modal>
  );
}

ModalWrapper.propTypes = {
  toggled: bool.isRequired,
  setToggle: func.isRequired,
};

export default ModalWrapper;
