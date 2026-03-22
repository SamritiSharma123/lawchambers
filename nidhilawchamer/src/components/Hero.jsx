import "./hero.css";
<section id="hero" className="hero"></section>
export default function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="hero-content">

        <h1>
          Law Chambers of <span>Adv. Nidhi Sharma</span>
        </h1>

        <p>
          Advocacy rooted in principle, preparation, and precedent.
        </p>

        {/* WHATSAPP BUTTON */}
        <a 
          href="https://wa.me/919988908205?text=Hello%20Adv.%20Nidhi%20Sharma,%20I%20would%20like%20to%20schedule%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
        >
          Schedule Consultation
        </a>

        {/* QR CODE */}
        <div className="hero-qr">
          <div className="qr-frame">
            <img src="/linkedn.jpeg" alt="LinkedIn QR" />
          </div>
          <h1><p>Scan to connect on LinkedIn</p></h1>
        </div>

      </div>

    </section>
  );
}