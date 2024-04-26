import React from 'react';
import '../styles/wrong4.css';
import { Link } from 'react-router-dom';
import wrongIcon from '../assets/wrongIcon.png';

const wrong4 = ({ message, onClose, className }) => {
  return (
    <div className={`wrong4-overlay ${className}`}>
      <div className="wrong4-alert">
        {/* <span className="close-btn" onClick={onClose}>&times;</span> */}
        <div className='wrong4-alert-left'>
          <img src={wrongIcon} />
          <div className='success-alert-left-textbox'>
            <h1>Oops Try Again!</h1>
            <h3>Quiz report</h3>
          </div>
        </div>
        <div className='wrong4-alert-right'>
          <Link onClick={onClose}>Try Again</Link>
        </div>
      </div>
    </div>
  );
};

export default wrong4;
