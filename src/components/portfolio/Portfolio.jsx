import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/Industrial robot image.png';
import IMG2 from '../../assets/Mern Webapplication.png';
import IMG3 from '../../assets/robotic arm prototype.png';
import IMG4 from '../../assets/Resume Website.png';
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
          <h3>Mahindra XUV300 Cowl Panel</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://drive.google.com/drive/folders/147sV7cpY4e-Luu_5zO64RNkPW8pPIDkw"
              className="btn"
              target="_blank"
            >
              Old Oper.
            </a>
            <a
              href="https://drive.google.com/drive/folders/147sV7cpY4e-Luu_5zO64RNkPW8pPIDkw"
              className="btn btn-primary"
              target="_blank"
            >
              New Oper.
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="portfolio image" />
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
            <img src={IMG3} alt="portfolio image" />
          </div>
          <h3>6-Axes Robotic Arm Prototype</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Pethkar-Tushar-Narendra"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://drive.google.com/drive/folders/19qoPJiELS_Z6VXdjwcw0Q6ACl2UFiOiv"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="portfolio image" />
          </div>
          <h3>Resume Website</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Pethkar-Tushar-Narendra"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://tushar-pethkar-resume.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* <article className="portfolio__item">
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
        </article> */}
      </div>
    </section>
  );
};

export default portfolio;
