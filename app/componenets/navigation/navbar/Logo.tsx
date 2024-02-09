import React from 'react';
import Image from 'next/image';
import logo from './blvckpixel2.svg';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src='/blvckpixel2.svg' alt="Logo" width={400} height={100} />
    </div>
  );
};

export default Logo;