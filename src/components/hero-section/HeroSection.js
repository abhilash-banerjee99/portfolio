import React from 'react';
import './heroSection.styles.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container row">
        <div className="hero__text">
          <h1>
            {' '}
            Hello, I'm <span class="">Abhilash</span> a{' '}
            <span class="">self-taught</span> front-end developer.
          </h1>
          <p> Stick around to see some of my work.</p>
          <button className="btn">
            <a href="https://github.com/abhilash-banerjee99">See my work</a>
          </button>
        </div>
        <div className="hero__img">
          <img src="img/coding.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
