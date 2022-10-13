import React from 'react';
import './About.css';
import Geek from '../../assets/geek.png';
import { BsTrophy } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { SiReact } from 'react-icons/si';

const About = () => {
  return (
    <section id="about">
      <br />
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Geek} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsTrophy className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ Clients Worldwide</small>
            </article>
            <article className="about__card">
              <SiReact className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            culpa ducimus officia totam suscipit eum. Quis, et? Adipisci ullam
            fugit fuga tempore itaque dolor! Esse dolorem doloremque facere
            officia animi!
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
