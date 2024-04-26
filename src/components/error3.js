import React from 'react';
import '../styles/error3.css';
import { Link } from 'react-router-dom';
import wrongIcon from '../assets/wrongIcon.png';

const error3 = ({ message, onClose, className }) => {
  return (
    <div className={`error3-overlay ${className}`}>
      <div className="error3-alert">
        {/* <span className="close-btn" onClick={onClose}>&times;</span> */}
        <div className='error3-alert-left'>
          <img src={wrongIcon} />
          <div className='success-alert-left-textbox'>
            <h1>Oops Try Again!</h1>
            <h3>Quiz report</h3>
          </div>
        </div>
        <div className='error3-alert-right'>
          <Link onClick={onClose}>Try Again</Link>
        </div>
      </div>
    </div>
  );
};

export default error3;
