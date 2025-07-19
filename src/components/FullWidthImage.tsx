'use client';

import Image from 'next/image';

const FullWidthImage = () => (
  <div className="text-center">
    <Image
      src="/images/modelonbridge.png"
      alt="Full Width Banner"
      width={1920}
      height={600}
      className="img-fluid w-100"
      priority
    />
  </div>
);

export default FullWidthImage;
