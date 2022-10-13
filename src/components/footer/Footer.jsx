import React from 'react';
import './Footer.css';
import { BsFacebook } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { BsTwitter } from 'react-icons/bs';
const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        Tushar Pethkar
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="">
          <BsFacebook />
        </a>
        <a href="">
          <RiInstagramFill />
        </a>
        <a href="">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Tushar Pethkar, All Rights Researved</small>
      </div>
    </footer>
  );
};

export default Footer;
