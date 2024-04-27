import React, { useState } from 'react'
import '../styles/language.css';
import { Link } from 'react-router-dom';
import industry from '../assets/industry.png';
import Logo from '../assets/Frame 1.png'
import TranslateIcon from '@mui/icons-material/Translate';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const LanguageComponent = ({ message, onClose, className }) => {
    

    return (
        <div className={`language-overlay ${className}`}>
            <nav className="landingnavbar">
                <div className="landingnavbar-logo" onClick={onClose}><img src={Logo} /></div>
                <div className="landingnavbar-links">
                    <a href="#home" onClick={onClose}>Home</a>
                    <a href="#home" onClick={onClose}>Resources</a>
                    {/* <select className='selectone' >
                        <option></option>
                        <option></option>
                        <option></option>
                    </select> */}
                    <Link onClick={onClose}>Industries</Link>
                    {/* <select className='selectoneI'>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select> */}
                    <a href="#link" onClick={onClose}>About Us</a>
                    {/* <select className='selectone'>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select> */}
                    <a href="#link" onClick={onClose}>Contact</a>
                </div>
                <div className="navbar-links-right">
                    <a href="/loginPage" onClick={onClose}>Login</a>
                    <a href="/getStarted2" className='rightButton' onClick={onClose}>Join for FREE</a>
                    <TranslateIcon className='icons' onClick={onClose}/>
                </div>
            </nav>
            <div className="language-alert">
                {/* <span className="close-btn" onClick={onClose}>&times;</span> */}
                <Link to='/'><li className='active'>English</li></Link>
                <Link to='/french'><li>French</li></Link>
                <Link><li>Portuguese</li></Link>
                <Link><li>German</li></Link>
                <Link><li>Chinese</li></Link>
            </div>
        </div>
    )
}

export default LanguageComponent
