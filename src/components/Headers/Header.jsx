import React from 'react';
import CTA from './CTA';
import './Header.css';
import Geek from '../../assets/geek.png';
import HeaderSocails from './HeaderSocails';
const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tushar Pethkar</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocails />
        <div className="me">
          <img src={Geek} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
