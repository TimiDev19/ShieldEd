import React from 'react';
import '../styles/fiftherror.css';
import { Link } from 'react-router-dom';
import wrongIcon from '../assets/wrongIcon.png';

const fiftherror = ({ message, onClose, className }) => {
  return (
    <div className={`fiftherror-overlay ${className}`}>
      <div className="fiftherror-alert">
        {/* <span className="close-btn" onClick={onClose}>&times;</span> */}
        <div className='fiftherror-alert-left'>
          <img src={wrongIcon} />
          <div className='success-alert-left-textbox'>
            <h1>Oops Try Again!</h1>
            <h3>Quiz report</h3>
          </div>
        </div>
        <div className='fiftherror-alert-right'>
          <Link onClick={onClose}>Try Again</Link>
        </div>
      </div>
    </div>
  );
};

export default fiftherror;
