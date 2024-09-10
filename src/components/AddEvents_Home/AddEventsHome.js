import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddEventHome.css";

const AddEventsHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="event-home">
      <p>
        <span>ONLINE EVENT:</span> You can participate <span>Virtually</span>{" "}
        from your home or work.
      </p>
      <div className="logo">
        <img 
          src="https://www.stripeconferences.com/wp-content/uploads/2023/11/stripe-conferences-logo2-1-1400x387.png" 
          alt="Logo" 
        />
      </div>
      <nav className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={isMenuOpen ? "active" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/scientific-committee">Scientific Committee</Link>
          </li>
          <li className="dropdown">
            <Link to="/speakers">Speakers</Link>
            <ul className="dropdown-content">
              <li>
                <Link to="">GCSA 2024</Link>
              </li>
              <li>
                <Link to="">GCSA 2023</Link>
              </li>
              <li>
                <Link to="">GCSA 2022</Link>
              </li>
              <li>
                <Link to="">GCSA 2021</Link>
              </li>
              <li>
                <Link to="">GCSA 2020</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/program">Program</Link>
            <ul className="dropdown-content">
              <li>
                <Link to="l">Final Program</Link>
              </li>
              <li>
                <Link to="">Scientific Session</Link>
              </li>
              <li>
                <Link to="">Scientific Program</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/information">Information</Link>
            <ul className="dropdown-content">
              <li>
                <Link to="">Venue</Link>
              </li>
              <li>
                <Link to="">Accommodation</Link>
              </li>
              <li>
                <Link to="">Guidelines</Link>
              </li>
              <li>
                <Link to="">FAQ</Link>
              </li>
              <li>
                <Link to="">Important Dates</Link>
              </li>
              <li>
                <Link to="">Conference Brochure</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/about">About</Link>
            <ul className="dropdown-content">
              <li>
                <Link to="">Past Events</Link>
              </li>
              <li>
                <Link to="">About Organizer</Link>
              </li>
              <li>
                <Link to="">Testimonials/ Reviews</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/submit-abstract">Submit Abstract</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>

      <div className="hero-section">
        <img src="https://img.freepik.com/free-photo/person-holding-speech-official-event_23-2151054194.jpg?t=st=1725953447~exp=1725957047~hmac=40dbae0d0faccb4f3ebf28d83aed29a915e339f5fe135d6423cf2c993f92af6e&w=1060"></img>

      </div>
    </div>
  );
};

export default AddEventsHome;
