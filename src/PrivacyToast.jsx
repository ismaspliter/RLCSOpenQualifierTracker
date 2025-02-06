import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import 'bootstrap/dist/css/bootstrap.min.css';

const PrivacyToast = () => {
  const [show, setShow] = useState(true);

  return (
    <Toast
      show={show}
      onClose={() => setShow(false)}
      delay={8000}
      autohide
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 9999,
        minWidth: '300px'
      }}
    >
      <Toast.Header>
        <strong className="mr-auto">Política de Privacidad</strong>
        <small>Ahora</small>
      </Toast.Header>
      <Toast.Body>
        Esta aplicación utiliza Google Analytics para medir el uso de la app. No recopilamos ni utilizamos datos personales, solo datos anónimos con fines estadísticos.
      </Toast.Body>
    </Toast>
  );
};

export default PrivacyToast;
