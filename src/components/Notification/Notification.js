import React from 'react';
import Toast from 'react-bootstrap/Toast'

const Notification = ({notification, onClose}) => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'relative',
        minHeight: '100px',
      }}
    >
      <Toast
        delay={3000}
        autohide
        show={notification}
        onClose={onClose}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      >
        <Toast.Header>
          <strong className="mr-auto">Eventos</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>{notification}</Toast.Body>
      </Toast>
    </div>
  );
};

export default Notification;