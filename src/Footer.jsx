import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#profile">Home</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#sosmed">Sosmed</a>
            </li>
            <li>
              <a href="#galeri">Galery</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <p>aufaaadrianto7@gmail.com</p>
          <p>WhatsApp: 087813031688</p>
        </div>

        <div className="footer-col">
          <h3>Follow Me</h3>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/13faaaa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aufaa-prie-adrianto-b4503437b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Aufaa13"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>

      <a href="#profile" className="back-to-top">
        ↑ Back to Top
      </a>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Aufaa Prie Adrianto. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;