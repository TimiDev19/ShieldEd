import React from 'react';
import '../styles/Sucess.css';
import { Link } from 'react-router-dom';
import successIcon from '../assets/successIcon.png'

const Success = ({ message, onClose, className }) => {
  return (
    <div className={`success-overlay ${className}`}>
      <div className="success-alert">
        {/* <span className="close-btn" onClick={onClose}>&times;</span> */}
        <div className='success-alert-left'>
          <img src={successIcon} />
          <div className='success-alert-left-textbox'>
            <h1>Great Job!</h1>
            <h3>Quiz report</h3>
          </div>
        </div>
        <div className='success-alert-right'>

          <Link to='/SecondChallenge'onClick={onClose}>Continue</Link>

          <Link onClick={onClose} to='/secondChallenge'>Continue</Link>

        </div>
      </div>
    </div>
  );
};

export default Success;
