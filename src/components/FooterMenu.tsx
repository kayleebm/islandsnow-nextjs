'use client';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const FooterMenu = () => (
  <footer className="bg-dark text-light py-5 mt-5">
    <Container>
      <Row className="text-start">
        {/* Navigation */}
        <Col md={4} className="mb-4">
          <h6 className="text-uppercase fw-bold mb-2">Navigation</h6>
          <hr className="border-secondary mb-3 mt-0" />
          <ul className="list-unstyled">
            <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
            <li><a href="#" className="text-light text-decoration-none">Store Payment</a></li>
          </ul>
        </Col>

        {/* Main Menu */}
        <Col md={4} className="mb-4">
          <h6 className="text-uppercase fw-bold mb-2">Main Menu</h6>
          <hr className="border-secondary mb-3 mt-0" />
          <ul className="list-unstyled">
            <li><a href="#" className="text-light text-decoration-none">Men</a></li>
            <li><a href="#" className="text-light text-decoration-none">Women</a></li>
          </ul>
        </Col>

        {/* Connect */}
        <Col md={4}>
          <h6 className="text-uppercase fw-bold mb-2">Connect</h6>
          <hr className="border-secondary mb-3 mt-0" />
          <p>Sign up for the latest updates</p>
          <Form className="d-flex">
            <Form.Control
              type="email"
              placeholder="Enter Email Address"
              className="me-2 rounded"
            />
            <Button variant="light">Join</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterMenu;
