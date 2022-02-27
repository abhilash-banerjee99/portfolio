import './nav.styles.css';
const Nav = () => {
  return (
    <header>
      <div className="container row">
        <a className="logo" href="https://github.com/abhilash-banerjee99">
          <img src="../img/logo.svg" alt="" />
        </a>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="https://github.com/abhilash-banerjee99"
                className="nav__link"
              >
                Work
              </a>
            </li>
            <li className="nav__item">
              <a
                href="https://github.com/abhilash-banerjee99"
                className="nav__link"
              >
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="https://github.com/abhilash-banerjee99"
                className="nav__link"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
