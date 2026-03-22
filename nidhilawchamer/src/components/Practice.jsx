import "./practice.css";

export default function PracticeAreas() {

  const areas = [
    "Civil Matters",
    "Criminal Litigation",
    "Matrimonial Cases",
    "Revenue Matters",
    "Service Matters",
    "Writ Petitions"
  ];

  return (
    <section id="practice" className="practice">

      <h2>Practice Areas</h2>

      <div className="practice-grid">
        {areas.map((area, i) => (
          <div className="practice-card" key={i}>
            <h3>{area}</h3>
            <p>Strategic legal representation with focused advocacy.</p>
          </div>
        ))}
      </div>

    </section>
  );
}