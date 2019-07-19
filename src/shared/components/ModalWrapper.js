import React from 'react';
import Modal from 'react-responsive-modal';
import { func, bool } from 'prop-types';

function ModalWrapper({
  toggled,
  toggler,
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
      onClose={toggler}
    >
      {children}
    </Modal>
  );
}

ModalWrapper.propTypes = {
  toggled: bool.isRequired,
  toggler: func.isRequired,
};

export default ModalWrapper;
