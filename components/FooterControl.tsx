'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer'; // Adjust the import path as necessary

const FooterControl = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== '/live' && <Footer />}
    </>
  );
};

export default FooterControl;