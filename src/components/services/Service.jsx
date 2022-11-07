import React from 'react';
import './services.css';
import { RiCheckboxCircleLine } from 'react-icons/ri';
const Service = () => {
  return (
    <section id="service">
      <br />
      <h5>What I Offer</h5>
      <h2>Projects</h2>
      <div className="container service__container">
        {/* /* ======== skill start*/}
        <article className="service">
          <div className="service__head">
            <h3>Optimization of process of XUV300 CowlPanel</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>
                Project done on Mahindra Xuv300 Cowl Panel At JBM Auto LTD
                Nashik
              </p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>
                Before we done anything Cycle time of process was 207sec, After
                project implementation cycle time was 125sec.
              </p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Relative efficiency increased by 60%.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Jobs per hour increased by 9 Units per hour.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>
                Learned how Industrial people works and How to interact with
                them.
              </p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>
                Got to know about inverse kinematics of robotic arm. to see
                video see in portfolio.
              </p>
            </li>
          </ul>
        </article>
        {/* /* ======== web dev start*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Application Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>In web application we used javascript framework and server.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Technologies used React.js and Node.js with Express.js.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Database technologies used is Mongodb and used aggregation.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>
                Considering security we used java web tokens and authorization.
              </p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>
                To secure data and privacy, we used encoding of password then
                saved in database.
              </p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Deployed MERN project on heroku server.</p>
            </li>
          </ul>
        </article>
        {/* /* ======== web dev end content skill start */}
        <article className="service">
          <div className="service__head">
            <h3>Prototype Of Industrial 6 Axes Robotic Arm</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>
                By Ding the project skills on inverse kinematics had been
                sharpened.
              </p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Got to know more about how robotic arm works.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>
                Used Arduino and servomotors to control the precision and
                repeatability robotic arm.
              </p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>
                By using Bluetooth module and MIT app inventor build android app
                controller.
              </p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>To see video of project see in portfolio.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Service;
