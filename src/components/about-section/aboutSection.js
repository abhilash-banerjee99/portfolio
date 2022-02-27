import Breadcrumb from '../breadcrumb/breadcrumb';
import './about.css';

// Who am I

const AboutSection = () => {
  return (
    <section class="section-three">
      <div class="container">
        <Breadcrumb name="About" />
        <h2>Get a closer look at who am I</h2>
        <Breadcrumb name="Skills & Frameworks" />
        <div class="list__container">
          <ul class="row">
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>SQL</li>
          </ul>
        </div>
        <Breadcrumb name="Who am I" />
        <div>
          <p>
            Currently pursuing Mater's degree (Computer Application) from
            Brainware University. Love to read books.
          </p>
        </div>
        <button class="btn">
          <a href="https://github.com/abhilash-banerjee99">Get in touch</a>
        </button>
        <button class="btn--dark">
          <a href="https://github.com/abhilash-banerjee99">Download CV</a>
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
