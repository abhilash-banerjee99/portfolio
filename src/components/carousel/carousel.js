// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './carousel.css';

const Carousel = () => {
  let slides = document.querySelectorAll('.slide-container');
  let index = 0;

  // // next function

  function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }

  // // previous function

  function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
  }

  return (
    <div className="carousel-container">
      <div className="slide-container active">
        <div className="slide">
          <div className="content">
            <span>
              <h3>Encrypted Anonymous File Sharing GUPT</h3>
            </span>
            <span>
              <p>
                GUPT is an encrypted anonymous file sharing app where you upload
                a file and the file is going to encrypt at the client side.
              </p>
            </span>
            <button className="btn-carousel">
              <a href="https://github.com/abhilash-banerjee99">See my work</a>
            </button>
          </div>
          <div className="image">
            <img src="img/image-01.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="slide-container">
        <div className="slide">
          <div className="content">
            <span>
              <h3>Book Tracking App</h3>
            </span>
            <span>
              <p>
                GUPT is an encrypted anonymous file sharing app where you upload
                a file and the file is going to encrypt at the client side.
              </p>
            </span>
            <button className="btn-carousel">
              <a href="https://github.com/abhilash-banerjee99">See my work</a>
            </button>
          </div>
          <div className="image">
            <img src="img/image-01.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="slide-container">
        <div className="slide">
          <div className="content">
            <span>
              <h3>Portfolio</h3>
            </span>
            <span>
              <p>
                GUPT is an encrypted anonymous file sharing app where you upload
                a file and the file is going to encrypt at the client side.
              </p>
            </span>
            <button className="btn-carousel">
              <a href="https://github.com/abhilash-banerjee99">See my work</a>
            </button>
          </div>
          <div className="image">
            <img src="img/image-01.jpg" alt="" />
          </div>
        </div>
      </div>
      <div id="prev" onClick={prev}>
        <FontAwesomeIcon icon={faAngleLeft} />{' '}
      </div>
      <div id="next" onClick={next}>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
};

export default Carousel;
