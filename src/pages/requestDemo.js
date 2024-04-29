import "../styles/requestDemo.css";
import { Link } from "react-router-dom";
import blueIcon from "../assets/Frame 1.png";
import requestModalBG from "../assets/requestModalBG.png";
import { CloseOutlined } from "@mui/icons-material";

function requestDemo() {
  return (
    <div className="requestDemo">
      <div className="container">
        <div className="left_side">
          <img className="background" src={requestModalBG} />
          <img src={blueIcon} />
          <h1>Request A Demo</h1>
          <p className="paragraph1">
            Request for our free demo and <br />
            experience our world-class Cyber <br />
            Security Awareness Training with <br /> a free demo today.{" "}
          </p>
          <div className="left"></div>

          <p className="paragraph2">
            It's quick, taking only 30 minutes of <br />
            your time, and requires no software <br />
            installation. Request now!
          </p>
        </div>
        <div className="right-side">
          <Link to="/">
            <CloseOutlined className="icons" />
          </Link>
          <h3>All fields are required*</h3>
          <div className="input-group">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Official Email" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Job Title" />
          </div>
          <div className="dropdown">
            <select id="employee-count" name="employee-count">
              <option value="1-10">How many employees work there</option>
              <option value="11-50">11-50</option>
              <option value="51-100">51-100</option>
              <option value="100+">100+</option>
            </select>
          </div>

          <Link to="/newSignup">
            <button className="signupBtn">Sign Up</button>
          </Link>
          <p className="requestModalParagraph">
            Find out how we keep your data safe -{" "}
            <span>
              <Link to="/privacypolicy"> Privacy policy</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default requestDemo;