import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div class="container row">
        <p>
          <FontAwesomeIcon icon={faCopyright} /> 2022 All Rights Reserved by
          Abhilash Banerjee{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
