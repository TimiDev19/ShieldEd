import React from 'react';
import '../styles/Sucess.css';
import { Link } from 'react-router-dom';

const Success = ({ message, onClose, className }) => {
  return (
    <div className={`success-overlay ${className}`}>
      <div className="success-alert">
        {/* <span className="close-btn" onClick={onClose}>&times;</span> */}
        <div className='success-alert-left'>
            <h1>Great Job!</h1>
            <h3>Quiz report</h3>
        </div>
        <div className='success-alert-right'>
            <Link onClick={onClose}>Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default Success;