import React, { useEffect, useRef, useState } from 'react';
import Logo from '../assets/Frame 1.png'
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import TranslateIcon from '@mui/icons-material/Translate';
import landingImage from '../assets/landingpicture.png';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LandingAvatar1 from '../assets/landingAvatar.png';
import LandingAvatar2 from '../assets/landindAvatar1.png';
import LandingAvatar3 from '../assets/landindAvatar2.png';
import LandingAvatar4 from '../assets/landingAvatar3.png';
import pattern from '../assets/pattern.png'
import ScrollReveal from 'scrollreveal';


import "../styles/LandingPage.css";
import leftIcon from "../assets/leftIcon.png";
import rightIcon from "../assets/rightIcon.png";
import sectionThreeIcon from "../assets/sectionThreeIcon.png";
import sectionThreeIconTwo from "../assets/sectionThreeIcontwo.png";

import LPtraining from '../assets/LPtraining.png'
import LPTestimonials from '../assets/LPTestimonials.png'
import patternLP from '../assets/patternLP.png'
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';



const LandingPage = () => {


    const revealRef = useRef(null);

    useEffect(() => {
        // Initialize ScrollReveal when the component mounts
        ScrollReveal().reveal(revealRef.current, {
            duration: 10000,
            distance: '20px',
            origin: 'bottom',
            opacity: 0,
            delay: 200,
            easing: 'cubic-bezier(0.5, 0, 0, 1)', // Optional easing function
        });
    }, []); // Ensure thi



    const [text, setText] = useState('');
    const fullText = 'Stay Secure . Stay Educated';

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100); // Adjust the typing speed (milliseconds per character) here
        return () => clearInterval(typingInterval);
    }, [fullText]);


    return (
        <div className='landingPageContainer'>
            <nav className="landingnavbar">
                <div className="landingnavbar-logo"><img src={Logo} /></div>
                <div className="landingnavbar-links">
                    <a href="#home">Learn</a>
                    <a href="#link">Resources</a>
                    <a href="#link">Industries</a>
                    <a href="#link">About Us</a>
                    <a href="#link">Contact</a>
                </div>
                <div className="navbar-links-right">
                    <a href="/loginPage">Login</a>
                    <a href="/signup" className='rightButton'>Get Started</a>
                    <TranslateIcon className='icons' />
                </div>
            </nav>


            <div className='landingHome'>

                <div className='landingHomeTextBox'>
                    <h1>{text}</h1>
                    <div ref={revealRef}>
                        <h1>The Fun Way</h1>
                    </div>

                    <p>
                        Unlock the secrets of cybersecurity through interactive
                        learning experiences, engaging challenges, and expert guidance.
                    </p>
                    <div className='buttonBox'>
                        <div className='leftButton'><Link to='/dashboard'>Start Learning</Link> <SchoolOutlinedIcon className='icons' /></div>
                        <div className='rightButton'><Link>Free teams demo</Link> <CalendarMonthOutlinedIcon className='icons'></CalendarMonthOutlinedIcon></div>
                    </div>
                </div>
                <img src={landingImage} />
            </div>



            <div className="sectionThree">
                <div className="leftSide">
                    <div className="leftIcon">
                        <img src={leftIcon} />
                    </div>
                    <h4>We Keep You Motivated</h4>
                    <p className="smallText">
                        With game-like features, interactive challenges, and <br /> friendly
                        reminders, we ensure that learning adventure.
                    </p>
                    <div className="imageOne">
                        <img src={sectionThreeIcon} />
                    </div>
                </div>
                <div className="rightSide">
                    <div className="rightIcon">
                        <img src={rightIcon} />
                    </div>
                    <h4>Complete and Earn Rewards</h4>
                    <p className="smallTextTwo">
                        Track your progress, challenge yourself, and climb the <br />
                        ranks. See how you measure up against peers as you <br />
                        master cybersecurity skills and earn rewards
                    </p>

                    <div className="imageTwo">
                        <img src={sectionThreeIconTwo} />
                    </div>
                </div>
            </div>



            <div className='fullLP'>
                <div className='card3Container' style={{ backgroundImage: `url(${patternLP})`, backgroundSize: `cover`, backgroundPosition: `center` }}>
                    <div className='header'>
                        <header> Cyber Security Training <br />for Every Department</header>
                    </div>
                    <div className='cardBody'>
                        <div className='rightBody'>
                            <Link><p className='topParagraph'>Sales Department </p></Link>
                            <h5>Our cybersecurity training for sales departments is <br /> meticulously crafted to address   the vulnerabilities <br /> and threats that sales teams face daily.</h5>
                            <hr />
                            <Link><p className='smallParagraph'>Finance Teams</p></Link>
                            <hr />
                            <Link><p className='smallParagraph'>Human Resources</p></Link>
                            <hr />
                            <Link><p className='smallParagraph'>Marketing Departments</p></Link>
                            <hr />
                            <Link><p className='smallParagraph'>Procurement Teams</p></Link>
                            <hr />
                            <Link><p className='smallParagraph'>Legal Departments</p></Link>
                            <hr />
                            <Link><p className='smallParagraph'>Executive Teams</p></Link>

                        </div>
                        <div className='leftBody'>
                            <img src={LPtraining} />
                            <div className='buttonContainer'>
                                <Link><button className='button1'>Free teams demo <h4><EventAvailableOutlinedIcon className='icons' /></h4></button></Link>   <br />
                                <Link><button className='button2'>Read more</button></Link>

                            </div>
                        </div>
                    </div>




                    <div className='communitySection'>
                        <h2>Join our cybersecurity awareness community</h2>
                        <div className='communityCard'>
                            <img src={LandingAvatar1} />
                            <div className='communityCardText'>
                                <h2>Alexandre Dubois</h2>
                                <h6>Paris, France</h6>
                                <p>
                                    Encountered a suspicious email today <br /> claiming to be from my
                                    bank. Has anyone <br />else experienced something similar?
                                </p>
                            </div>
                        </div>

                        <div className='communityCardGrid'>
                            <div className='communityCard'>
                                <img src={LandingAvatar2} />
                                <div className='communityCardText'>
                                    <h2>Priya Patel</h2>
                                    <h6>Mumbai, India</h6>
                                    <p>
                                        Received a suspicious text message <br />
                                        asking me to click on a link to claim a <br />
                                        prize. Wondering if anyone else has <br />
                                        encountered this scam?
                                    </p>
                                </div>
                            </div>

                            <div className='communityCard'>
                                <img src={LandingAvatar3} />
                                <div className='communityCardText'>
                                    <h2 className='special'>Oluwabukola Aderinsola</h2>
                                    <h6>Paris, France</h6>
                                    <p>
                                        Encountered a suspicious email today <br /> claiming to be from my
                                        bank. Has anyone <br />else experienced something similar?
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className='communityCard'>
                            <img src={LandingAvatar4} />
                            <div className='communityCardText'>
                                <h2>Chen Wei</h2>
                                <h6>Shanghai, China</h6>
                                <p>
                                    "Need help identifying a potentially<br />
                                    malicious app on my smartphone. It's been <br />
                                    draining battery and displaying strange <br />
                                    behavior. Any advice on how to proceed?
                                </p>
                            </div>
                        </div>

                        <div className='footerContainer' style={{ backgroundImage: `url(${pattern})` }}>
                            <div className='linkBox'>
                                <div className='leftLinkBox'>
                                    <img src={Logo} />
                                    <p>
                                        Be the first to receive all the recent updates, <br />
                                        articles, and valuable materials.
                                    </p>
                                    <div className='leftLinkButtonBox'>
                                        <input type='email' placeholder='Email Address' />
                                        <Link>Subscribe</Link>
                                    </div>
                                </div>

                                <div className='rightLinkBox'>
                                    <div className='rightListBox'>
                                        <ul>
                                            <li><span>Industries</span></li>
                                            <li>Financial Services</li>
                                            <li>Government</li>
                                            <li>Enterprises</li>
                                            <li>Remote Workers</li>
                                            <li>Education</li>
                                            <li>Healthcare</li>
                                        </ul>
                                    </div>

                                    <div className='rightListBox'>
                                        <ul>
                                            <li><span>Resources</span></li>
                                            <li>Blog</li>
                                            <li>News Room</li>
                                            <li>Family Crash Course</li>
                                            <li>Cybernary</li>
                                            <li>Events and Webinars</li>
                                            <li>Free Awarness Posters</li>
                                        </ul>
                                    </div>

                                    <div className='rightListBox'>
                                        <ul>
                                            <li><span>More</span></li>
                                            <li>About Us</li>
                                            <li>SecureSeniors Initiative</li>
                                            <li>Affiliate Program</li>
                                            <li>Community</li>
                                            <li>Contact Us</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='lowerFooterText'>
                                <div className='lowerFooterLeft'>
                                    <li>Terms of Service</li>
                                    <li>Privacy Policy</li>
                                    <li>Accessibility Statement</li>
                                </div>
                                <div className='lowerFooterRight'>
                                    <li>&copy; 2024 ShieldEd. All rights reserved.</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LandingPage;
