import { useEffect, useState } from "react";
import "./loader.css";

function Loader() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 4000); // Loader duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-wrapper ${fadeOut ? "fade-out" : ""}`}>

      {/* Background Golden Glow */}
      <div className="bg-glow"></div>

      {/* Outer Ring */}
      <div className="ring1"></div>

      {/* Inner Ring */}
      <div className="ring2"></div>

      {/* Center Content */}
      <div className="loader-content">

        {/* Logo */}
        <img
          src="/logo.png"
          alt="Nidhi Sharma Law Chambers"
          className="logo"
        />

        {/* Law Firm Name */}
        <h1 className="law-name">
          Nidhi Sharma Law Chambers
        </h1>

        {/* Tagline */}
        <p className="tagline">
          Advocating Truth & Justice
        </p>

      </div>

    </div>
  );
}

export default Loader;