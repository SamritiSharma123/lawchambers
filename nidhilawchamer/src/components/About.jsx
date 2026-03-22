import "./about.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
       
        {/* IMAGE */}
        <div className="about-image">
          <img src="./Advocate.png" alt="Advocate" />
        </div>

        {/* CONTENT */}
        <div className="about-content">

          <h1 align="center">
            <span className="about-tag">ADVOCATE PROFILE</span>
          </h1>

          <h2 className="name">
           <span className="name-line">
           Adv. <span className="highlight">Nidhi Sharma</span>
           </span>
          </h2>
          <p a>
            Nidhi Sharma is an advocate engaged in litigation practice with a focus on civil, constitutional , criminal, matrimonial, service matters and commercial disputes before the High Courts and other judicial forums.Her work centres on complex questions of law involving statutory interpretation, procedural jurisprudence, and the development of legal principles through precedent. She has been engaged in matters requiring detailed legal research and nuanced understanding of procedural as well as substantive law.
            Nidhi approaches litigation with an emphasis on intellectual rigour, precision in legal reasoning, and disciplined preparation. Her practice reflects a commitment to careful analysis of the law and its principled application to the facts of each case.
            Through her professional work and legal writing, she remains actively engaged with evolving jurisprudence and contemporary developments in litigation practice.
            Law Chambers of Nidhi Sharma represents a commitment to thoughtful legal strategy, meticulous preparation, and advocacy rooted in principle, precedent, and clarity of legal thought
          </p>

          {/* QUALIFICATIONS */}
          <div className="about-qualifications">
            <div className="card">
              <h5>Education</h5>
              <p>B.A. LL.B (Hons)</p>
              <p>LL.M — Criminal & Corporate Law</p>
            </div>

            <div className="card">
              <h5>Alumni</h5>
              <p>UILS, Panjab University</p>
            </div>
          </div>

          {/* CTA */}
          <a 
  href="https://wa.me/919988908205?text=Hello%20Adv.%20Nidhi%20Sharma,%20I%20would%20like%20to%20schedule%20a%20consultation."
  target="_blank"
  rel="noopener noreferrer"
  className="about-btn"
>
  Schedule Consultation
</a>  
        </div>
      </div>
    </section>
  );
}