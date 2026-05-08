function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg luxury-navbar fixed-top">
      <div className="container">
        <a className="navbar-brand logo" href="#">
          MK
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <i className="bi bi-list text-light"></i>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a href="#expertise" className="nav-link">
                Expertise
              </a>
            </li>

            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a href="#experience" className="nav-link">
                Experience
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>

          <a href="#contact" className="luxury-btn">
            Let’s Build Your Store
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;