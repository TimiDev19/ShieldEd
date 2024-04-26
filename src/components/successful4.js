import React from 'react';
import '../styles/successful4.css';
import { Link } from 'react-router-dom';
import successIcon from '../assets/successIcon.png'

const successful4 = ({ message, onClose, className }) => {
  return (
    <div className={`successful4-overlay ${className}`}>
      <div className="successful4-alert">
        {/* <span className="close-btn" onClick={onClose}>&times;</span> */}
        <div className='successful4-alert-left'>
          <img src={successIcon} />
          <div className='successful4-alert-left-textbox'>
            <h1>Great Job!</h1>
            <h3>Quiz report</h3>
          </div>
        </div>
        <div className='successful4-alert-right'>
          <Link to='/challengefive'onClick={onClose}>Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default successful4;