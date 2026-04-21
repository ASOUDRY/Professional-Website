const Footer = () => {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-content">
        <h2>Contact</h2>
        <ul className="footer-list">
          <li>Phone: 443-615-3229</li>
          <li>
            Email:{" "}
            <a href="mailto:alexandersoudry@gmail.com">
              alexandersoudry@gmail.com
            </a>{" "}
            (Preferred Method of Contact)
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/alexandersoudry/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;