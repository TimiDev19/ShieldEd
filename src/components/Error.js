import React from 'react';
import '../styles/Error.css';
import { Link } from 'react-router-dom';
import wrongIcon from '../assets/wrongIcon.png';

const Error = ({ message, onClose, className }) => {
  return (
    <div className={`error-overlay ${className}`}>
      <div className="error-alert">
        {/* <span className="close-btn" onClick={onClose}>&times;</span> */}
        <div className='error-alert-left'>
          <img src={wrongIcon} />
          <div className='success-alert-left-textbox'>
            <h1>Oops Try Again!</h1>
            <h3>Quiz report</h3>
          </div>
        </div>
        <div className='error-alert-right'>
          <Link onClick={onClose}>Try Again</Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
