import React from 'react'
import '../styles/resources.css';
import { Link } from 'react-router-dom';
import industry from '../assets/industry.png';
import Logo from '../assets/Frame 1.png'
import TranslateIcon from '@mui/icons-material/Translate';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Resources = ({ message, onClose, className }) => {
    return (
        <div className={`resources-overlay ${className}`}>
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
            <div className="resources-alert">
                {/* <span className="close-btn" onClick={onClose}>&times;</span> */}
                <div className='resources-alert-left'>
                    <div>
                        <h1>Resources</h1>
                        <p>
                            Our free awareness assets can be used to help imporve cyber security awareness.
                        </p>
                        <li>Blog</li>
                        <li>News Room</li>
                        <li>Community</li>
                    </div>
                </div>
                <div className='resources-alert-right'>
                    <h3><Link>Family Crash Course</Link></h3>
                    <p>Videos filled with stories and tips to educate your family and keep them safer in the digital world.</p>
                    <h3><Link>Cybernary</Link></h3>
                    <p>A Glossary of Must-Know Cyber Security Terms</p>
                    <h3><Link>Events and Webinars</Link></h3>
                    <p>Learn from our amazing panelists on topics from creating security awareness programs</p>
                    <h3><Link>Free Awareness Posters</Link></h3>
                    <p>Download Our Free Awareness Assets To Imporove Cyber Security Awareness in Your Organisation</p>
                </div>
            </div>
        </div>
    )
}

export default Resources
