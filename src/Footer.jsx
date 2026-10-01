function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copy">&copy; {new Date().getFullYear()} Aufaa Prie Adrianto</p>
      <a className="footer-contact" href="mailto:aufaaadrianto7@gmail.com">
        Email saya <span aria-hidden="true">&#8599;</span>
      </a>
    </footer>
  );
}

export default Footer;