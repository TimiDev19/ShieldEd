import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Favorite } from '@mui/icons-material';
import Success from '../components/successpopup3';
import Error from '../components/error3';
import '../styles/thirdChallenges.css';
import SecondChallengeImage from '../assets/phisingimage3.png';
import Industries from '../components/Industries';

const ThirdChallenges = () => {


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
        <div className="challenges2Container">
            <div className='challenges2Header'>
                <Link to="/courses"><CloseIcon className='icons' /></Link>
                <div className='challengesProgressBar2'>
                    <div className='challengesProgress2'>
                        <div className='challengesText2'><h8 className="challengeProgress2">3/5</h8></div>
                    </div>
                </div>
                <Favorite className='heart' />
                <div className='hearttext'><p>10</p></div>
            </div>
            <div className='challengeHeadText2'>
                <h3>Identifying Common Phishing Techniques</h3>
                <p>
                    A suspicious link has landed in your inbox. Is it a harmless URL or a phishing trap? <br />
                    Analyze the email carefully and make your decision.
                </p>
                <img src={SecondChallengeImage} alt="Quiz" />
                <div className='challengButtonBox2'>
                    <Link className='leftChallengeBtn2' onClick={handleVerifyClick}>Report as Phishing</Link>
                    <div className='rightChallengeBtn2'>
                        <Link to='' onClick={handleVerifyClickE} >Verify</Link>
                    </div>
                </div>
                </div>
      {showSuccessAlert && <Success message="Verification successful!" onClose={handleCloseAlert} />} {/* Pass handleCloseAlert function as onClose prop */}
      {showErrorAlert && <Error message="Verification successful!" onClose={handleCloseAlertE} />}
      {showIndAlert && <Industries onClose={handleCloseInd}/>}
    </div>
    );
}

export default ThirdChallenges;
