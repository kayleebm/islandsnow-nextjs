'use client';

import Image from 'next/image';
import { Container } from 'react-bootstrap';

const IslandSnowLogo = () => (
  <Container className="text-center py-3">
    <Image
      src="/images/islandsnowlogo.png"
      alt="Island Snow Logo"
      width={200}
      height={100}
      className="img-fluid mx-auto d-block"
    />
  </Container>
);

export default IslandSnowLogo;
