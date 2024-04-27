import React, { useState } from 'react';
import '../styles/industries.css';
import { Link } from 'react-router-dom';
import industry from '../assets/industry.png';
import Logo from '../assets/Frame 1.png'
import TranslateIcon from '@mui/icons-material/Translate';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LanguageComponent from './LanguageComponent';

const Industries = ({ message, onClose, className }) => {

    const [showLanguageAlert, setShowLanguageAlert] = useState(false);

    const handleVerifyClickL = () => {
        onClose();
        setShowLanguageAlert(true);
    }

    const handleCloseLanguage = () => {
        setShowLanguageAlert(false);
    }
    return (
        <div className={`industry-overlay ${className}`}>
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
            <div className="industry-alert">
                {/* <span className="close-btn" onClick={onClose}>&times;</span> */}
                <div className='industry-alert-left'>
                    <div>
                        <h1>Industries</h1>
                        <p>
                            Explore the versatility of our solutions across diverse industries. From the dynamic tech sector to healthcare. Our solution is personalized across all sectors.
                        </p>
                    </div>
                    <div>
                        <img src={industry} />
                    </div>
                </div>
                <div className='industry-alert-right'>
                    <h3><Link>Finance Teams</Link></h3>
                    <p>Creating A First Line Of Defence For Financial Service Organisations</p>
                    <h3><Link>Government</Link></h3>
                    <p>A Go-To Security Awareness Solution For Governments</p>
                    <h3><Link>Sales Department</Link></h3>
                    <p>A Security Awareness Training Solution For Sales Teams</p>
                    <h3><Link>Remote Workers</Link></h3>
                    <p>Embed A Culture Of Security Awareness - Even At Home</p>
                    <h3><Link>Education Sector</Link></h3>
                    <p>Engaging Security Awareness Training For The Education Sector</p>
                    <h3><Link>Healthcare Workers</Link></h3>
                    <p>See Our Tailored Security Awareness For Healthcare Workers</p>
                    <h3><Link>TechIndustry</Link></h3>
                    <p>Transforming Security Awareness Training In The Tech Industry</p>
                </div>
            </div>

            {showLanguageAlert && <LanguageComponent onClose={handleCloseLanguage} />}
        </div>
    );
};

export default Industries;
