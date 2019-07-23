import React from 'react';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';
import { toggleMenu } from '../../os/actions/osActionCreators';

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

const mapStateToProps = state => ({
  toggled: state.os.menuToggled
});

const mapDispatchToProps = dispatch => ({
  setToggle: () => dispatch(toggleMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);
