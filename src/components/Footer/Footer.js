import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <div className="footer text-light">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h2>
              Eventos de Tecnologia
            </h2>
          </Col>
        </Row>
      </div>
      <div>
        <Row className="justify-content-md-center">
          <Col  md="auto" className="text-light bg-dark">
            &copy; {new Date().getFullYear()} Copyright: ACAMICA
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;