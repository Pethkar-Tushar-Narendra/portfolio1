import React from 'react';
import './services.css';
import { RiCheckboxCircleLine } from 'react-icons/ri';
const Service = () => {
  return (
    <section id="service">
      <br />
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        {/* /* ======== skill start*/}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/* /* ======== web dev start*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/* /* ======== web dev end content skill start */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckboxCircleLine className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Service;
