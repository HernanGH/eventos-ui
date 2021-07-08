import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { INSCRIPTION_URL } from '../../constants';
import Notification from '../../components/Notification/Notification';

const Inscription = () => {
  const { id } = useParams();
  const [notification, setNotification] = useState('');
  const [eventSelected, setEventSelected] = useState({
    id: id || 0,
  })

  const handleEventChange = ({target}) => {
    setEventSelected({
      ...eventSelected,
      id: target.value
    })
  }

  const handleEmailChange = ({target}) => {
    setEventSelected({
      ...eventSelected,
      email: target.value
    })
  }

  const handleClick = (e) => {
    e.preventDefault();
    
    fetch(INSCRIPTION_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventSelected)
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

  useEffect(() => {
    setEventSelected({
      id: id
    })
  }, [id]);

  return (
    <>
    <div className="form">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-light bg-dark">Email address: </Form.Label>
          <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted text-light bg-dark">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formGridState">
          <Form.Label>Evento: </Form.Label>
          <Form.Control as="select" defaultValue={eventSelected.id} onChange={handleEventChange}>
            <option value="0" label="Evento 1">Evento 1</option>
            <option value="1" label="Evento 2">Evento 2</option>
            <option value="2" label="Evento 3">Evento 3</option>
          </Form.Control>
        </Form.Group>
        <Button onClick={handleClick} variant="primary" type="submit">
          Inscribirme
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

export default Inscription;