import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_8dz4942',
        'template_39q8vdc',
        form.current,
        'Hy7AoaIueKT-uCWnd'
      )
      .then(
        (result) => {
          alert('Message Is Sent To Tushar. Thank You..');
          e.target.reset();
        },
        (error) => {
          alert('Message is Not Sent, Please Try Again.');
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMarkEmailRead className="contact__option-icon" />
            <h4>Email</h4>
            <h5>pethkartusharnarendra@gmail.com</h5>
            <a href="mailto:pethkartusharnarendra@gmail.com" target="_blank">
              Send a message on Email
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Tushar Pethkar</h5>
            <a
              href="https://m.me/profile.php?id=100086675233027"
              target="_blank"
            >
              Send a message on FB Messanger
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>What's App</h4>
            <h5>Tushar Pethkar</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+918446520712"
              target="_blank"
            >
              Send a message on What's App
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Type Your Message Here"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message To Tushar Pethkar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
