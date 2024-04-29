import React from 'react';
import '../styles/fivesuccess.css';
import { Link } from 'react-router-dom';
import successIcon from '../assets/successIcon.png'

const fivesuccess= ({ message, onClose, className }) => {
  return (
    <div className={`fivesuccess-overlay ${className}`}>
      <div className="fivesuccess-Alert">
        {/* <span className="close-btn" onClick={onClose}>&times;</span> */}
        <div className='fivesuccess-Alert-left'>
          <img src={successIcon} />
          <div className='fivesuccess-Alert-left-textbox'>
            <h1>Great Job!</h1>
            <h3>Quiz report</h3>
          </div>
        </div>
        <div className='fivesuccess-Alert-right'>
          <Link to='/unitCompletion'onClick={onClose}>Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default fivesuccess;