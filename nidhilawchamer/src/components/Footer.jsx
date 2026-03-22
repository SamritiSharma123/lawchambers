import "./footer.css";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col brand">
          <h3>
            Law Chambers of <span>Adv. Nidhi Sharma</span>
          </h3>

          <p>
            Independent legal practice offering representation across civil,
            criminal, matrimonial and constitutional matters with integrity
            and precision.
          </p>

          <div className="credentials">
            <p>BA LL.B (Hons) • LL.M</p>
            <p>UILS, Panjab University</p>
          </div>
        </div>

        {/* PRACTICE AREAS */}
        <div className="footer-col">
          <h4>Practice Areas</h4>
          <ul>
            <li>Civil Matters</li>
            <li>Criminal Litigation</li>
            <li>Matrimonial Disputes</li>
            <li>Service Matters</li>
            <li>Writ Petitions</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            
            <li><a href="#practice">Practice Areas</a></li>
            <li><a href="#about">About Advocate</a></li>
            <li><a href="#contact">Book Appointment</a></li>
            <li><a href="#contact">Contact Chambers</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col contact">
          <h4>Contact Chambers</h4>

          <p>#205, Sector 38-A, Chandigarh</p>
          <p>+91 9988908205</p>
          <p>snidhiii.108@gmail.com</p>

          <a
            href="https://wa.me/919988908205?text=Hello%20Adv.%20Nidhi%20Sharma,%20I%20would%20like%20to%20schedule%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            WhatsApp Consultation
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Law Chambers of Adv. Nidhi Sharma. All Rights Reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="footer-socials">

          <a
            href="https://wa.me/919988908205"
            target="_blank"
            rel="noopener noreferrer"
            data-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.linkedin.com/in/nidhi-sharma-b7b66732b"
            target="_blank"
            rel="noopener noreferrer"
            data-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:snidhiii.108@gmail.com"
            data-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

    </footer>
  );
}