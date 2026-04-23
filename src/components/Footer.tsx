import "../css/footer.css"

const Footer = () => {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-copy">
            <p className="footer-kicker">Contact</p>
            <h2>Let’s Connect</h2>
            <p className="footer-text">
              I’m open to backend and full stack software development opportunities.
              Email is the best way to reach me.
            </p>
          </div>

          <ul className="footer-list">
            <li>
              <span>Email</span>
              <a href="mailto:alexandersoudry@gmail.com">
                alexandersoudry@gmail.com
              </a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/alexandersoudry/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/alexandersoudry
              </a>
            </li>
            <li>
              <span>GitHub</span>
              <a
                href="https://github.com/ASOUDRY"
                target="_blank"
                rel="noreferrer"
              >
                github.com/ASOUDRY
              </a>
            </li>
          </ul>
        </div>

        <p className="footer-bottom">© 2026 Alexander Soudry</p>
      </div>
    </footer>
  );
};

export default Footer;