import React from 'react';
import Logo from './Logo';
import LoggedInUser from './User';

const Navbar: React.FC = () => {
  return (
<div className="navbar">
      <Logo />
      <LoggedInUser />
    </div>
  );
};

export default Navbar;
