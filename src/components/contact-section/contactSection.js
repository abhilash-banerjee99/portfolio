import React from 'react';
import Breadcrumb from '../breadcrumb/breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import './contact.css';

const ContactSection = () => {
  return (
    <section class="section-four">
      <div class="container">
        <Breadcrumb name="Connect" />
        <h2>Interested in working with me or perhaps just talk?</h2>
        <p>
          Reach me on social media or by sending an email to{' '}
          <span>digiabhi1999@gmail.com</span>
        </p>
        <ul class="list">
          <li class="list__item">
            <a
              href="https://www.linkedin.com/in/abhilash-banerjee-741881148/"
              class="list__item--link"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li class="list__item">
            <a
              href="https://github.com/abhilash-banerjee99"
              class="list__item--link"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
