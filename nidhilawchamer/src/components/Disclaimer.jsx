import "./disclaimer.css";

function Disclaimer({ onAgree }) {
  return (
    <div className="disclaimer-overlay">

      <div className="disclaimer-box">

        <button className="close-btn" onClick={onAgree}>✕</button>

        <h2>DISCLAIMER & CONFIRMATION</h2>

        <p>
          As per the rules of the Bar Council of India, lawyers and law firms
          are not permitted to solicit work or advertise. By clicking on
          the “I Agree” button below, the user agrees and acknowledges that:
        </p>

        <ul>
          <li>
            There has been no advertisement, personal communication,
            solicitation, invitation or any other inducement by or on behalf of
            <strong> Nidhi Law Chambers </strong> to solicit work.
          </li>

          <li>
            The user wishes to gain more information about Nidhi Law Chambers
            for personal use.
          </li>

          <li>
            All information on this website is provided only upon the user’s
            specific request and does not create a lawyer-client relationship.
          </li>

          <li>
            Nidhi Law Chambers assumes no liability for interpretation or use
            of the information contained on this website.
          </li>
        </ul>

        <button className="agree-btn" onClick={onAgree}>
          I Agree
        </button>

      </div>
    </div>
  );
}

export default Disclaimer;