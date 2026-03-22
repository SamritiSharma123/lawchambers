import "./contact.css";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
<section id="contact" className="contact-section"></section>
export default function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        {/* LEFT — TEXT */}
        <div className="contact-left">

          <h2 className="contact-title">
            Contact <span>Chambers</span>
          </h2>

          <p className="contact-subtext">
            For consultations and professional legal assistance, please connect through the following channels or visit the chambers.
          </p>

          <div className="contact-info">
            <p>#205, Sector 38-A, Chandigarh</p>
            <p>+91 9988908205</p>
            <p>snidhiii.108@gmail.com</p>
          </div>

          {/* CONTACT OPTIONS */}
          <div className="contact-options">

            <a
              href="https://wa.me/919988908205?text=Hello%20Adv.%20Nidhi%20Sharma,%20I%20would%20like%20to%20schedule%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nidhi-sharma-b7b66732b"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:snidhiii.108@gmail.com"
              className="contact-card"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>

          </div>

        </div>

        {/* RIGHT — MAP */}
        <div className="contact-right">
          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps?q=Sector+38-A+Chandigarh&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

    </section>
  );
}