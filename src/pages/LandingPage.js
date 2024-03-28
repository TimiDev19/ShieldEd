import "../styles/LandingPage.css";
import leftIcon from "../assets/leftIcon.png";
import rightIcon from "../assets/rightIcon.png";
import sectionThreeIcon from "../assets/sectionThreeIcon.png";
import sectionThreeIconTwo from "../assets/sectionThreeIcontwo.png";

import LPtraining from '../assets/LPtraining.png'
import LPTestimonials from '../assets/LPTestimonials.png'
import patternLP from '../assets/patternLP.png'
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import { Link } from 'react-router-dom';

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


<div className='fullLP'>
            <div className='card3Container' style={{backgroundImage:`url(${patternLP})`, backgroundSize: `cover`, backgroundPosition:`center` }}>
                <div className='header'>
                    <header> Cyber Security Training <br/>for Every Department</header>
                </div>
                <div className='cardBody'>
                    <div className='rightBody'>
                        <Link><p className='topParagraph'>Sales Department </p></Link>
                        <h5>Our cybersecurity training for sales departments is <br/> meticulously crafted to address   the vulnerabilities <br/> and threats that sales teams face daily.</h5>
                        <hr/>
                        <Link><p className='smallParagraph'>Finance Teams</p></Link>
                        <hr/>
                        <Link><p className='smallParagraph'>Human Resources</p></Link>
                        <hr/>
                        <Link><p className='smallParagraph'>Marketing Departments</p></Link>
                        <hr/>
                        <Link><p className='smallParagraph'>Procurement Teams</p></Link>
                        <hr/>
                        <Link><p className='smallParagraph'>Legal Departments</p></Link>
                        <hr/>
                        <Link><p className='smallParagraph'>Executive Teams</p></Link>

                    </div>
                    <div className='leftBody'>
                        <img src={LPtraining}/>
                        <div className='buttonContainer'>
                            <Link><button className='button1'>Free teams demo <h4><EventAvailableOutlinedIcon   className='icons'/></h4></button></Link>   <br/>
                            <Link><button className='button2'>Read more</button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default LandingPage;
