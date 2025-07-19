'use client';

import { Container, Nav } from 'react-bootstrap';
import { CaretDownFill } from 'react-bootstrap-icons';

const MiddleMenu = () => (
  <Container>
    <Nav className="justify-content-center text-uppercase">
      <Nav.Link href="#">
        Men
        {' '}
        <CaretDownFill size={10} />
      </Nav.Link>
      <Nav.Link href="#">
        Women
        {' '}
        <CaretDownFill size={10} />
      </Nav.Link>
      <Nav.Link href="#">
        Kids
        {' '}
        <CaretDownFill size={10} />
      </Nav.Link>
      <Nav.Link href="#">
        Brands
        {' '}
        <CaretDownFill size={10} />
      </Nav.Link>
      <Nav.Link href="#">
        Search
      </Nav.Link>
    </Nav>
  </Container>
);

export default MiddleMenu;
