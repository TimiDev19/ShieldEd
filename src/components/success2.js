import React from 'react';
import '../styles/success2.css';
import { Link } from 'react-router-dom';
import successIcon from '../assets/successIcon.png'

const success2 = ({ message, onClose, className }) => {
  return (
    <div className={`success2-overlay ${className}`}>
      <div className="success2-alert">
        {/* <span className="close-btn" onClick={onClose}>&times;</span> */}
        <div className='success2-alert-left'>
          <img src={successIcon} />
          <div className='success2-alert-left-textbox'>
            <h1>Great Job!</h1>
            <h3>Quiz report</h3>
          </div>
        </div>
        <div className='success2-alert-right'>
          <Link to='/thirdChallenges'onClick={onClose}>Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default success2;