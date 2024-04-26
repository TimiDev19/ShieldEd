import React from 'react';
import '../styles/successpopup3.css';
import { Link } from 'react-router-dom';
import successIcon from '../assets/successIcon.png'

const successpopup3 = ({ message, onClose, className }) => {
  return (
    <div className={`successpopup3-overlay ${className}`}>
      <div className="successpopup3-alert">
        {/* <span className="close-btn" onClick={onClose}>&times;</span> */}
        <div className='successpopup3-alert-left'>
          <img src={successIcon} />
          <div className='successpopup3-alert-left-textbox'>
            <h1>Great Job!</h1>
            <h3>Quiz report</h3>
          </div>
        </div>
        <div className='successpopup3-alert-right'>
          <Link to='/fourthchallenge'onClick={onClose}>Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default successpopup3;