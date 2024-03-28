import "../styles/LandingPage.css";
import leftIcon from "../assets/leftIcon.png";
import rightIcon from "../assets/rightIcon.png";
import sectionThreeIcon from "../assets/sectionThreeIcon.png";
import sectionThreeIconTwo from "../assets/sectionThreeIcontwo.png";

const LandingPage = () => {
  return (
    <div>
      <div className="sectionThree">
        <div className="leftSide">
          <div className="leftIcon">
            <img src={leftIcon} />
          </div>
          <h4>We Keep You Motivated</h4>
          <p className="smallText">
            With game-like features, interactive challenges, and <br /> friendly
            reminders, we ensure that learning adventure.
          </p>
          <div className="imageOne">
            <img src={sectionThreeIcon} />
          </div>
        </div>
        <div className="rightSide">
          <div className="rightIcon">
            <img src={rightIcon} />
          </div>
          <h4>Complete and Earn Rewards</h4>
          <p className="smallTextTwo">
            Track your progress, challenge yourself, and climb the <br />
            ranks. See how you measure up against peers as you <br />
            master cybersecurity skills and earn rewards
          </p>

          <div className="imageTwo">
            <img src={sectionThreeIconTwo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
