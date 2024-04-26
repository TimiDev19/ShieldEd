import React from 'react';
import '../styles/errorpopup2.css';
import { Link } from 'react-router-dom';
import wrongIcon from '../assets/wrongIcon.png';

const errorpopup2 = ({ message, onClose, className }) => {
  return (
    <div className={`errorpopup2-overlay ${className}`}>
      <div className="errorpopup2-alert">
        {/* <span className="close-btn" onClick={onClose}>&times;</span> */}
        <div className='errorpopup2-alert-left'>
          <img src={wrongIcon} />
          <div className='success-alert-left-textbox'>
            <h1>Oops Try Again!</h1>
            <h3>Quiz report</h3>
          </div>
        </div>
        <div className='errorpopup2-alert-right'>
          <Link onClick={onClose}>Try Again</Link>
        </div>
      </div>
    </div>
  );
};

export default errorpopup2;
