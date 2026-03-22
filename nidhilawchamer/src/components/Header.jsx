import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="nav-container">

        {/* LOGO */}
        <div className="logo-area">
          <img src="/logo.png" alt="logo" />
          <div className="logo-text">
            <h3>Nidhi Sharma</h3>
            <span>Law Chambers</span>
          </div>
        </div>

        {/* MENU */}
        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#practice">Practice Areas</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* CTA */}
        <a href="tel:9988908205" className="call-btn">
          Call Now
        </a>

      </div>
    </header>
  );
}