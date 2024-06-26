import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Favorite } from '@mui/icons-material';
import Success from '../components/Success';
import Error from '../components/Error';
import quizImage from '../assets/quiz-image.png';
import '../styles/challenges.css';
import Industries from '../components/Industries';

const Challenges = () => {


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
    <div className="challengesContainer">
      <div className='challengesHeader'>
        <Link to="/courses"><CloseIcon className='icons' /></Link>
        <div className='challengesProgressBar'>
          <div className='challengesProgress'>
            <div className='challengesText'><h8 className="challengeProgress">1/5</h8></div>
          </div>
        </div>
        <Favorite className='heart' />
        <div className='hearttext'><p>10</p></div>
      </div>
      
      <div className='challengeHeadText'>
        <h3>Identifying Common Phishing Techniques</h3>
        <p>
          A suspicious link has landed in your inbox. Is it a harmless URL or a phishing trap? <br />
          Analyze the email carefully and make your decision.
        </p>
        <img src={quizImage} alt="Quiz" />
        <div className='challengButtonBox'>
          <Link className='leftChallengeBtn' onClick={handleVerifyClick}>Report as Phishing</Link>
          <div className='rightChallengeBtn'>
            <Link to='' onClick={handleVerifyClickE} >Verify</Link>
          </div>
        </div>
      </div>
      {showSuccessAlert && <Success message="Verification successful!" onClose={handleCloseAlert} />} {/* Pass handleCloseAlert function as onClose prop */}
      {showErrorAlert && <Error message="Verification successful!" onClose={handleCloseAlertE} />}
      {showIndAlert && <Industries onClose={handleCloseInd}/>}
    </div>
  );
};

export default Challenges;
