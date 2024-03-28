import "../styles/LandingPage.css";
import leftIcon from "../assets/leftIcon.png";
import rightIcon from "../assets/rightIcon.png";
import sectionThreeIcon from "../assets/sectionThreeIcon.png";
import sectionThreeIconTwo from "../assets/sectionThreeIcontwo.png";

const LandingPage = () => {
  return (
    <div>
    <div className="learningBody">
      <div className="sectionThree">
      
        <div className="leftSide">
          <div className="leftIcon">
            <img src={leftIcon} />
          </div>
          <h3>We Keep You Motivated</h3>
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
      
      
      <div className="cards">
      <h3>Have Questions? We're Happy to Help!</h3>
      
<div class="card-container">
  <div class="column">
    <div class="card"><p>Is ShieldEd suitable for beginners?</p>
<p>Yes, ShieldEd is suitable for beginners and users of all skill levels. The platform offers introductory courses covering fundamental cybersecurity concepts in an accessible and easy-to-understand manner.  ShieldEd's user-friendly interface and interactive learning approach make it ideal for individuals who are new to cybersecurity and want to build a solid foundation of knowledge.
Security and Privacy
Community  Features</p></div>
    <div class="card">Security and Privacy</div>
    <div class="card">Community Features</div>
  </div>
  <div class="column">
    <div class="card">Team Training</div>
    <div class="card">Technical Support</div>
    <div class="card">Subscription and Pricing</div>

  </div>
</div>
      </div>
    </div>
    </div>
  );
};

export default LandingPage;
