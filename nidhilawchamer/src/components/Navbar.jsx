import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">

        <div className="logo">
          NIDHI LAW CHAMBERS
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Practice Areas</li>
          <li>Contact</li>
        </ul>

        <button className="nav-btn">Schedule Meeting</button>

      </div>
    </nav>
  );
}