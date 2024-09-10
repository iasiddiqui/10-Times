import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddEventHome.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const AddEventsHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="event-home">
      <p className="event">
        <span>ONLINE EVENT:</span> You can participate <span>Virtually</span>{" "}
        from your home or work.
      </p>

      {/* navbar start */}

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
            <Link to="">
              Speakers
              <ArrowDropDownIcon />
            </Link>
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
            <Link to="">
              Program <ArrowDropDownIcon />
            </Link>
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
            <Link to="">
              Information <ArrowDropDownIcon />
            </Link>
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
            <Link to="">
              About <ArrowDropDownIcon />
            </Link>
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
            <Link to="">Contact</Link>
          </li>
          <li>
            <Link to="">Submit Abstract</Link>
          </li>
          <li>
            <Link to="">Register</Link>
          </li>
        </ul>
      </nav>

      {/* hero section start */}

      <div className="hero-section">
        <img
          src="https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951245.jpg?t=st=1725953947~exp=1725957547~hmac=870bf87e89aadfba54e5cb2f61728af0456bc176069f81da18d35a39ed3985b1&w=740"
          alt="Event"
        />
        <div className="overlays">
          <div className="overlay">
            <h1>
              7th Edition of International Conference on
              <br /> Materials Science and Engineering
            </h1>
          </div>
          <div className="event-date">
            <h2>October 28-30, 2024 | Online Event</h2>
          </div>
          <div className="overlay-box-container">
            <div className="overlay-box">
              <Link className="link" to="">
                Tentative Program
              </Link>
            </div>
            <div className="overlay-box-early">
              <Link className="early" to="">
                Early Bird Registration Closes on December 17, 2024
              </Link>
            </div>
            <div className="overlay-box">
              <Link className="link" to="">
                Second Round of Abstract Submissions Closes on January 16, 2025
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="second-hero">
        <h3 className="online-event">Online Event</h3>
        <p className="second-para">
          <apan>Contact Info</apan>
          <br />
          Phone : 1 (702) 988-2320 <br />
          WhatsApp : +1 (640) 666 9566
          <br />
          Email: materialscience@magnusconference.com
        </p>
        <button className="hero-button">
          <Link className="link" to="">
            Conference Brochure{" "}
          </Link>
        </button>
        <button className="hero-button">
          <Link className="link" to="">
            Register{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AddEventsHome;
