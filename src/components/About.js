import React from 'react'
import '../styles/About.css';
import { Link } from 'react-router-dom';
import industry from '../assets/industry.png';
import Logo from '../assets/Frame 1.png'
import TranslateIcon from '@mui/icons-material/Translate';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const About = ({ message, onClose, className }) => {
    return (
        <div className={`about-overlay ${className}`}>
            <nav className="landingnavbar">
                <div className="landingnavbar-logo" onClick={onClose}><img src={Logo} /></div>
                <div className="landingnavbar-links">
                    <a href="#home" onClick={onClose}>Home</a>
                    <Link onClick={onClose}>Resources</Link>
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
            <div className="about-alert">
                {/* <span className="close-btn" onClick={onClose}>&times;</span> */}
                <div className='about-alert-left'>
                    <div>
                        <h1>About Us</h1>
                        <p>
                            Learn Why ShieldEd is the Trusted Partent For Security Awareness Learning and Training
                        </p>
                        <div className='aboutListBox'>
                            <li>Blog</li>
                            <li>News Room</li>
                            <li>Community</li>
                        </div>
                    </div>
                </div>
                <div className='about-alert-right'>
                    <h3><Link>Join our awesome Cybersecurity <br/> Advocates</Link></h3>
                    <p>Share your knowledge with the senior citizens of your country and safe them from cyber attack!</p>
                    <h3><Link>Become a SheildEd Advocate</Link></h3>
                </div>
            </div>
        </div>
    )
}

export default About
