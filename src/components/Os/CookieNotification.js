import React from 'react';
import Modal from 'react-responsive-modal';
import SoftwareWindow from '../../shared/components/SoftwareWindow/SoftwareWindow';

function CookieNotification({
  open,
  acknowledge
}) {
  console.log(open);

  return (
    <Modal
      open={open}
      onClose={acknowledge}
      showCloseIcon={false}
    >
      <SoftwareWindow title="Excuse me," noClose>
        <p>This site uses cookies to store information about the current theme.</p>
        <p>No personal information is ever accessed.</p>
      </SoftwareWindow>
    </Modal>
  );
}

export default CookieNotification;
