import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav data-testid="navigation">
    <ul className={style.navContainer}>
      <li className={style.mathMagician}>Math Magicians</li>
      <li><Link to="/">Home</Link></li>
      <li>&#124;</li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li>&#124;</li>
      <li><Link to="/quote">Quote</Link></li>
    </ul>
  </nav>
);

export default Navbar;
