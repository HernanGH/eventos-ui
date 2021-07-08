import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LOGIN_URL } from '../../constants';
import Notification from '../../components/Notification/Notification';

const Login = () => {
  const [notification, setNotification] = useState('');
  const [user, setUser] = useState({})

  const handleEmailChange = ({target}) => {
    setUser({
      ...user,
      email: target.value
    })
  }

  const handlePasswordChange = ({target}) => {
    setUser({
      ...user,
      password: target.value
    })
  }

  const handleClick = (e) => {
    e.preventDefault();
    
    fetch(LOGIN_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        setNotification('Error interno, por favor intente mas tarde');
      })
  }

  const handleClose = () => {
    setNotification('');
  }

  return (
    <>
    <div className="form">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-light bg-dark">Email address: </Form.Label>
          <Form.Control onChange={handleEmailChange} type="email" placeholder="Ingrese email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-light bg-dark">Password</Form.Label>
          <Form.Control onChange={handlePasswordChange} type="password" placeholder="Contraseña" />
        </Form.Group>
        <Button onClick={handleClick} variant="primary" type="submit">
          Iniciar
        </Button>
      </Form>
    </div>
    {notification && (
      <Notification
        notification={notification}
        onClose={handleClose}
      />)
    }
    </>
  );
};

export default Login;