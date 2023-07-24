import React, { useEffect, useState, useContext } from 'react';
import './navbar.css';
import { NavLinksContext } from '../../utilties/context/Navroute';

const Navbar: React.FC = () => {
    
  return (
    <nav>
      <h1>Joel</h1>
      <a href='mailto:joelk9895@gmail.com'>Contact</a>
    </nav>
  );
};

export default Navbar;
