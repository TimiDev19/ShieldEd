import "../styles/readMore.css";
import { Link } from "react-router-dom";
import TranslateIcon from "@mui/icons-material/Translate";
import LPtraining from "../assets/LPtraining.png";
import readmore_pattern from "../assets/readmore_pattern.png";
import readmoreImage2 from "../assets/readmoreImage2.png";
import Verified from "../assets/Verified.png";
import Risk_management from "../assets/Risk_management.png";
import Policy from "../assets/Policy.png";
import Reputation from "../assets/Reputation.png";

import StarIcon from "@mui/icons-material/Star";
import testimonial1 from "../assets/dummyimage1.png";
import testimonial2 from "../assets/dummyimage2.png";
import testimonial3 from "../assets/dummyimage3.png";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import Logo from "../assets/Frame 1.png";
import pattern from "../assets/pattern.png";

const readMore = () => {
  return (
    <div className="mainContainer">
      <nav className="landingnavbar">
        <div className="landingnavbar-logo">
          <img src={Logo} />
        </div>
        <div className="landingnavbar-links">
          <a href="#home">Learn</a>
          <a href="#link">Resources</a>
          <a href="#link">Industries</a>
          <Link to="/privacypolicy">
            <a href="#link">About Us</a>
          </Link>
          <a href="#link">Contact</a>
        </div>
        <div className="navbar-links-right">
          <a href="/loginPage">Login</a>
          <a href="/getStarted2" className="rightButton">
            Join for FREE
          </a>
          <TranslateIcon className="icons" />
        </div>
      </nav>

      <div className="firstreadmore_card">
        <div
          className="firstreadmore_Container"
          style={{
            backgroundImage: `url(${readmore_pattern})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
          }}
        >
          <button className="readmoreButton1">For Sales Department</button>
          <div className="cardBody">
            <div className="rightBody">
              <header>
                Security Awareness <br /> Training
              </header>
              <h5>
                Sales departments are a prime target for cybercriminals since{" "}
                <br /> this departments deal with valuable assets and sensitive{" "}
                <br />
                information that attackers covet.
              </h5>
              <Link to="/requestDemo" className="demoButton">
                Free teams demo{" "}
                <h4>
                  <EventAvailableOutlinedIcon className="icons" />
                </h4>
              </Link>
            </div>
            <div className="leftBody">
              <img src={LPtraining} />
              <div className="buttonContainer"></div>
            </div>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="secondreadmore_container">
        <div className="image-container">
          <img src={readmoreImage2} />
        </div>
        <div className="text-container">
          <h1>Why the Sales Department is a Solid Target.</h1>
          <p>
            Cybercriminals recognize the potential financial gains and leverage
            the <br /> vulnerabilities within sales systems and processes to
            carry out their <br /> malicious activities. The Sales Department
            sector is heavily targeted due <br /> to its involvement in
            high-value transactions and access to valuable <br /> customer data.{" "}
          </p>
        </div>
      </div>

      {/* fourth section */}
      <div className="thirdreadmore_container">
        <h1>
          Benefits of Security Awareness Training <br />
          for Sales Department
        </h1>

        <div className="thirdcontainer_cards">
          <div className="row">
            <div className="left_card">
              <div className="left_cardsizing">
                <img src={Verified} />
                <h2>Data Protection</h2>
                <p>
                  Enhances understanding of security protocols,
                  <br /> safeguarding sensitive customer data and minimizing
                  risks of breaches.
                </p>
              </div>
            </div>

            <div className="left_card">
              <img src={Risk_management} />
              <h2>Risk Mitigation</h2>
              <p>
                Equips sales staff with knowledge to identify and respond to
                potential security threats, reducing vulnerabilities in customer
                interactions.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="right_card">
              <img src={Policy} />
              <h2>Compliance Adherence</h2>
              <p>
                Ensures adherence to regulatory requirements, fostering trust
                with clients and mitigating legal consequences.
              </p>
            </div>

            <div className="right_card">
              <img src={Reputation} />
              <h2>Brand Reputation</h2>
              <p>
                Bolsters company reputation by demonstrating commitment to
                cybersecurity, instilling confidence in clients and partners.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonialsContainer">
        <header>
          <h2>What Do Our Customers Say?</h2>
        </header>
        <div className="testimonialBox">
          <div className="testimonial-card">
            <span className="stars">
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
            </span>
            <p>
              As a sales manager, I've been impressed by the comprehensive
              training. The interactive nature of the courses keeps our team
              engaged and motivated to learn.{" "}
            </p>
            <div className="card-footer">
              <img src={testimonial1} />
              <span className="Box1-details">
                <h4>Obi James</h4>
                <p>AbasaMart Corporation</p>
              </span>
            </div>
          </div>

          <div className="testimonial-card">
            <span className="stars">
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
            </span>
            <p>
              ShieldEd's cybersecurity training program has been invaluable for
              our sales team. Our employees have gained a deep understanding of
              cybersecurity threats.{" "}
            </p>
            <div className="card-footer">
              <img src={testimonial2} />
              <span className="Box1-details">
                <h4>Shien Kui</h4>
                <p>HappyDay Sales Agency</p>
              </span>
            </div>
          </div>

          <div className="testimonial-card">
            <span className="stars">
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
            </span>
            <p>
              We've been using ShieldEd's for several months now, and the
              results have been outstanding. The training modules are tailored
              to our specific needs.
            </p>
            <div className="card-footer">
              <img src={testimonial3} />
              <span className="Box1-details">
                <h4>Angela Fox</h4>
                <p>Whitey Sales Inc</p>
              </span>
            </div>
          </div>
        </div>

        <Link className="see-allButton">
          {" "}
          <p>See all</p>
        </Link>
      </div>

      <div className="bookDemo-container">
        <h2>Book A Demo</h2>
        <p>
          Would your sales department benefit from implementing powerful
          security <br />
          awareness training? If so, please take a moment to complete the form
          below to
          <br /> request a free demo of our platform in action.
        </p>
        <div className="bookdemo-buuton">
          <Link to="/requestDemo" className="demoButton">
            Free teams demo{" "}
            <h4>
              <EventAvailableOutlinedIcon className="icons" />
            </h4>
          </Link>
        </div>
      </div>

      <div
        className="footerContainer"
        style={{ backgroundImage: `url(${pattern})` }}
      >
        <div className="linkBox">
          <div className="leftLinkBox">
            <img src={Logo} />
            <p>
              Be the first to receive all the recent updates, <br />
              articles, and valuable materials.
            </p>
            <div className="leftLinkButtonBox">
              <input type="email" placeholder="Email Address" />
              <Link>Subscribe</Link>
            </div>
          </div>

          <div className="rightLinkBox">
            <div className="rightListBox">
              <ul>
                <li>
                  <span>Industries</span>
                </li>
                <li>Financial Services</li>
                <li>Government</li>
                <li>Enterprises</li>
                <li>Remote Workers</li>
                <li>Education</li>
                <li>Healthcare</li>
              </ul>
            </div>

            <div className="rightListBox">
              <ul>
                <li>
                  <span>Resources</span>
                </li>
                <li>Blog</li>
                <li>News Room</li>
                <li>Family Crash Course</li>
                <li>Cybernary</li>
                <li>Events and Webinars</li>
                <li>Free Awarness Posters</li>
              </ul>
            </div>

            <div className="rightListBox">
              <ul>
                <li>
                  <span>More</span>
                </li>
                <li>About Us</li>
                <li>SecureSeniors Initiative</li>
                <li>Affiliate Program</li>
                <li>Community</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lowerFooterText">
          <div className="lowerFooterLeft">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Accessibility Statement</li>
          </div>
          <div className="lowerFooterRight">
            <li>&copy; 2024 ShieldEd. All rights reserved.</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default readMore;
