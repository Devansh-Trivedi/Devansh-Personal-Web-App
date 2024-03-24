import React, { useState, useRef } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../client';
import './Footer.scss';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm('service_8jbjki9', 'template_3hz53ld', form.current, {
        publicKey: 'ybsRwsRKyMaaX77Y8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <h2 className="footerHead" id="footerHead">
        Take a coffee & chat with me
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:tridevansh.160601@gmail.com" className="p-text">
            tridevansh.160601@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">
            (+91)9324177269
          </a>
        </div>
      </div>

      <div className="app__footer-form ">
        {!isFormSubmitted ? (
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="username"
              />
            </div>
            <label>Email</label>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
              />
            </div>
            <label>Message</label>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                name="message"
              />
            </div>
            {/* <input className="p-text" type="submit" value="Send" /> */}
            <button type="submit" className="p-text" value="Send">
              {!loading ? 'Send Message' : 'Sending...'}
            </button>
          </form>
        ) : (
          <div>
            <h3 className="footerHead ">Thank you for getting in touch!</h3>
          </div>
        )}
      </div>

      {/* {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              ref={form}
              onChange={handleChangeInput}
              onSubmit={sendEmail}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="p-text" onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="footerHead ">Thank you for getting in touch!</h3>
        </div>
      )} */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'contact__background'
);
