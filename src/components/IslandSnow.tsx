'use client';

import { Container } from 'react-bootstrap';
import TopMenu from './TopMenu';
import IslandSnowLogo from './IslandSnowLogo';
import MiddleMenu from './MiddleMenu';
import FullWidthImage from './FullWidthImage';
import FooterMenu from './FooterMenu';

const IslandSnow = () => (
  <main>
    <Container fluid id="footer">
      <TopMenu />
      <IslandSnowLogo />
      <MiddleMenu />
      <FullWidthImage />
      <FooterMenu />
    </Container>
  </main>
);

export default IslandSnow;
