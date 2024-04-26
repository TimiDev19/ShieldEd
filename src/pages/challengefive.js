import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Favorite } from '@mui/icons-material';
import Success from '../components/fivesuccess';
import Error from '../components/fiftherror';
import '../styles/challengefive.css';
import SecondChallengeImage from '../assets/phisingimage5.png';
import Industries from '../components/Industries';

const Challengefive = () => {


    const verifyButton = () => {
      handleVerifyClick();
  
    };
  
  
  
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [showIndAlert, setShowIndAlert] = useState(false);
  
    const handleVerifyClick = () => {
      setShowSuccessAlert(true);
    };
  
    const handleVerifyClickE = () => {
      setShowErrorAlert(true);
    }
  
    const handleVerifyClickI = () => {
      setShowIndAlert(true);
    }
  
    const handleCloseAlert = () => {
      setShowSuccessAlert(false); // Reset the state back to false when the alert is closed
    };
  
    const handleCloseInd = () => {
      setShowIndAlert(false); // Reset the state back to false when the alert is closed
    };
  
    const handleCloseAlertE = () => {
      setShowErrorAlert(false);
    }

    return (
        <div className="fifthchallengesContainer">
            <div className='fifthchallengesHeader'>
                <Link to="/courses"><CloseIcon className='icons' /></Link>
                <div className='fifthchallengesProgressBar'>
                    <div className='fifthchallengesProgress'>
                        <div className='fifthchallengesText'><h8 className="fifthchallengeProgress">5/5</h8></div>
                    </div>
                </div>
                <Favorite className='heart' />
            </div>
            <div className='fiftjchallengeHeadText'>
                <h3>Identifying Common Phishing Techniques</h3>
                <p>
                    A suspicious link has landed in your inbox. Is it a harmless URL or a phishing trap? <br />
                    Analyze the email carefully and make your decision.
                </p>
                <img src={SecondChallengeImage} alt="Quiz" />
                <div className='fifthchallengButtonBox'>
                    <Link className='fifthleftChallengeBtn' onClick={handleVerifyClickE}>Report as Phishing</Link>
                    <div className='fifthrightChallengeBtn'>
                        <Link to='' onClick={handleVerifyClick} >Verify</Link>
                    </div>
                </div>
                </div>
      {showSuccessAlert && <Success message="Verification successful!" onClose={handleCloseAlert} />} {/* Pass handleCloseAlert function as onClose prop */}
      {showErrorAlert && <Error message="Verification successful!" onClose={handleCloseAlertE} />}
      {showIndAlert && <Industries onClose={handleCloseInd}/>}
    </div>
    );
}

export default Challengefive;
