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
        <span className="span1">ONLINE EVENT:</span> You can participate <span className="span1">Virtually</span>{" "}
        from your home or work.
      </p>

      {/* Navbar */}
      <nav className="navbar">
      <div className="logo">
        <img
          src="https://www.stripeconferences.com/wp-content/uploads/2023/11/stripe-conferences-logo2-1-1400x387.png"
          alt="Event Logo"
        />
      </div>
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
                <Link to="">Final Program</Link>
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

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951245.jpg"
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

      {/* Second Hero Section */}
      <div className="second-hero">
        <h3 className="online-event">Online Event</h3>
        <p className="second-para">
          <span className="span2">Contact Info</span>
          <br />
          Phone: 1 (702) 988-2320
          <br />
          WhatsApp: +1 (640) 666 9566
          <br />
          Email: materialscience@magnusconference.com
        </p>
        <div className="button-div">
          <button className="hero-button">
            <Link className="link" to="">
              Conference Brochure
            </Link>
          </button>
          <button className="hero-button">
            <Link className="link" to="">
              Register
            </Link>
          </button>
        </div>
      </div>
      <div className="about-us">
        <h1 className="about-h1"> About stripe 2025 | Hybrid Event</h1>
        <p className="about-us-para">
        We are delighted to extend a cordial invitation to you for the "7th Edition of International Conference on Materials Science and Engineering" (MAT 2024), scheduled to take place from October 28-30, 2024, an Online Format<br/>
        The innovative Online format provides participants with the flexibility to engage Virtually from the comfort and convenience of their home or workplace.<br/>
        At the heart of this global summit is the theme, "Engineering Excellence: Novel Innovations in Material Science and Engineering" MAT 2024 stands as a dynamic platform poised to facilitate the exchange of cutting-edge research findings and advanced methodologies in the expansive field of materials science. Over the course of three days, the congress aims to establish a valuable forum, bringing together international experts, researchers, scientists, engineers and industry representatives for a rich and multidisciplinary exchange of knowledge.<br/>
        Expect to be inspired by internationally acclaimed speakers who will share insights into the evolving landscape of materials science, addressing current challenges and presenting innovative solutions. Beyond the enriching academic sessions, this event is designed to provide an excellent networking opportunity for experts and industry partners alike. Anticipating the active participation of experts from premier research and professional institutes across the globe, MAT 2024 is poised to foster collaborative discussions that showcase the rapid advancements in material science and engineering.<br/>
        We extend a warm invitation to you not only to attend but also to actively contribute to the discourse on materials engineering topics. Join us in shaping the future of this dynamic field alongside a community of esteemed experts and thought leaders. Your presence and insights will undoubtedly enhance the depth and breadth of this prestigious event dedicated to advancing materials science and engineering.<br/>
        Recommended: Materials Science Conferences 2024 | Materials Conference 2024 | Materials Science and Engineering Events 2024 | Materials Congress 2024
        </p>
      </div>
      
    </div>
  );
};

export default AddEventsHome;
