import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/e-com.webp';
import IMG2 from '../../assets/1.webp';
import IMG3 from '../../assets/2.webp';
import IMG4 from '../../assets/3.webp';
import IMG5 from '../../assets/4.webp';
import IMG6 from '../../assets/5.webp';
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="portfolio image" />
          </div>
          <h3>E-Commerse Web Application</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Pethkar-Tushar-Narendra"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://e-commerce-shopping-app-tushar.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="portfolio image" />
          </div>
          <h3>E-Commerse Web Application</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn" target="_blank">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="portfolio image" />
          </div>
          <h3>E-Commerse Web Application</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn" target="_blank">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="portfolio image" />
          </div>
          <h3>E-Commerse Web Application</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn" target="_blank">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="portfolio image" />
          </div>
          <h3>E-Commerse Web Application</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn" target="_blank">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="portfolio image" />
          </div>
          <h3>E-Commerse Web Application</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn" target="_blank">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
