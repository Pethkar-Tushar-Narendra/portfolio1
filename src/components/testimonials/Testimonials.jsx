import React from 'react';
import './testimonial.css';
import avatar1 from '../../assets/jbm.png';
import avatar2 from '../../assets/cdac.jpeg';
import avatar3 from '../../assets/default profile picture.jpg';
import avatar4 from '../../assets/avatar4.webp';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avatar1} alt="client avatar" />
          </div>
          <h5 className="client__name">JBM Auto LTD</h5>
          <small className="client__review">
            Done Project successfully on very advanced and complex robotic
            process adn optimized it. He is a Quick learner for any new
            technologies and finding solutions.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avatar2} alt="client avatar" />
          </div>
          <h5 className="client__name">CDAC Bangalore</h5>
          <small className="client__review">
            Successfully completed training with project and quick learner with
            unfamiliar technologies.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avatar3} alt="client avatar" />
          </div>
          <h5 className="client__name">Akash Hingne JBM</h5>
          <small className="client__review">
            With some of our guidance he has learned evrything which is required
            to get into problem and solve it. I must appreciate his work in
            industry as well as by making prototype of robotic arm same in
            industry.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
