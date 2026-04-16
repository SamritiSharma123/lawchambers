import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">

        <div className="logo">
          <Link to="/" className="nav-link-item logo-link">
            NIDHI LAW CHAMBERS
          </Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link-item">Home</Link>
          </li>

          <li>
            <a href="#about" className="nav-link-item">About</a>
          </li>

          <li>
            <a href="#practice" className="nav-link-item">Practice Areas</a>
          </li>

          <li>
            <Link to="/blogs" className="nav-link-item">Blogs</Link>
          </li>

          <li>
            <a href="#contact" className="nav-link-item">Contact</a>
          </li>
        </ul>

        <a href="#contact">
          <button className="nav-btn">Schedule Meeting</button>
        </a>

      </div>
    </nav>
  );
}