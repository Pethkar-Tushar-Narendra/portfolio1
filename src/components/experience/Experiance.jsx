import React from 'react';
import './experiance.css';
import { ImHtmlFive2 } from 'react-icons/im';
import { GrCss3 } from 'react-icons/gr';
import { TbBrandJavascript } from 'react-icons/tb';
import { BsBootstrap } from 'react-icons/bs';
import { SiReact } from 'react-icons/si';
import { DiNodejsSmall } from 'react-icons/di';
import { SiMongodb } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiJava } from 'react-icons/si';
import { SiSpring } from 'react-icons/si';
import { TbBrandPython } from 'react-icons/tb';
const experiance = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Devlopment</h3>
          <div className="experience__content">
            <article className="experience__details">
              <span className="experience__details-icon">
                <ImHtmlFive2 />
              </span>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <span className="experience__details-icon">
                <GrCss3 />
              </span>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <span className="experience__details-icon">
                <TbBrandJavascript />
              </span>
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <span className="experience__details-icon">
                <BsBootstrap />
              </span>
              <h4>BootStrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <span className="experience__details-icon">
                <SiReact />
              </span>
              <h4>React.js</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Devlopment</h3>
          <div className="experience__content">
            <article className="experience__details">
              <span className="experience__details-icon">
                <DiNodejsSmall />
              </span>
              <h4>Node.js</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <span className="experience__details-icon">
                <SiMongodb />
              </span>
              <h4>Mongo DB</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <span className="experience__details-icon">
                <SiMysql />
              </span>
              <h4>Mysql</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <span className="experience__details-icon">
                <SiJava />
              </span>
              <h4>Java</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <span className="experience__details-icon">
                <SiSpring />
              </span>
              <h4>Spring</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <span className="experience__details-icon">
                <TbBrandPython />
              </span>
              <h4>Python</h4>
              <small className="text-light">Basic</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experiance;
