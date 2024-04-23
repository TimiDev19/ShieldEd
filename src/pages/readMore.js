import React, { useEffect, useRef, useState } from 'react';
import Logo from '../assets/Frame 1.png'
import { Link } from 'react-router-dom';
import '../styles/Readmore.css';
import TranslateIcon from '@mui/icons-material/Translate';
import ReadmoreGroup from '../assets/readmoreGroup1.png';
import Verified from '../assets/Verified.png';
import landingImage from '../assets/landingpicture.png';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LandingAvatar1 from '../assets/landingAvatar.png';
import LandingAvatar2 from '../assets/landindAvatar1.png';
import LandingAvatar3 from '../assets/landindAvatar2.png';
import LandingAvatar4 from '../assets/landingAvatar3.png';
import pattern from '../assets/pattern.png'
import ScrollReveal from 'scrollreveal';
import CollapsibleBox from '../components/collapsableBox';


import "../styles/Readmore.css";
import leftIcon from "../assets/leftIcon.png";
import rightIcon from "../assets/rightIcon.png";
import sectionThreeIconTwo from "../assets/sectionThreeIcontwo.png";
import section3icon from "../assets/section3icon.png";
import section3image from "../assets/section3image.png";
import section3image1 from "../assets/section3image1.png";

import LPtraining from "../assets/LPtraining.png";
import LPTestimonials from "../assets/LPTestimonials.png";
import patternLP from "../assets/patternLP.png";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import communitySection from "../assets/Testimonials.png";
import Riskmanagement from '../assets/Riskmanagement.png';
import policy from '../assets/Policy.png';
import reputation from '../assets/Reputation.png';
import testimonial1 from '../assets/testimonial1.png';
import testimonial2 from '../assets/testimonial2.png';
import testimonial3 from '../assets/testimonial3.png';
import review from '../assets/Review.png';

function Readmore() {
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
        <div className='readmorePage'>
            <nav className="landingnavbar">
                <div className="landingnavbar-logo"><img src={Logo} /></div>
                <div className="landingnavbar-links">
                    <a href="#home">Learn</a>
                    <a href="#link">Resources</a>
                    <a href="#link">Industries</a>
                    <Link to="/privacypolicy"><a href="#link">About Us</a></Link>
                    <a href="#link">Contact</a>
                </div>
                <div className="navbar-links-right">
                    <a href="/loginPage">Login</a>
                    <a href="/getStarted2" className='rightButton'>Join for FREE</a>
                    <TranslateIcon className='icons' />
                </div>
            </nav>

            <div className='readmoreHome'>
                <div className='readmoreCard'>
                    <div className='readmoreCardLeft'>
                        <div className='readmoreLeftContainer'>
                            <Link className='readmoreCardButton1'>For Sales Department</Link>
                            <h1>Secuirity Awareness Training</h1>
                            <p>Sales departments are a prime target for cybercriminals since this departments deal with valuable assets and sensitive information that attackers covet.</p>
                            <Link><button className='leftBodyButton1'>Free teams demo <h4><EventAvailableOutlinedIcon className='icons' /></h4></button></Link>
                        </div>
                    </div>
                    <div className='readmoreCardRight'><img src={LPtraining} /></div>
                </div>
            </div>

            <div className='readmoreSection2'>
                <div className='readmoreSectionLeft'>
                    <img src={ReadmoreGroup} />
                </div>
                <div className='readmoreSectionRight'>
                    <h1>Why the Sales Department <br />is a Solid Target</h1>
                    <p>Cybercriminals recognize the potential financial gains and leverage the <br />
                        vulnerabilities within sales systems and processes to carry out <br />
                        their malicious activities. The Sales Department sector is heavily targeted due <br />
                        to its involvement in high-value transactions and access to valuable customer data. </p>
                </div>
            </div>

            <div className='readmoreSection3'>
                <h1>Benefits of Security Awareness Training <br />for Sales Department</h1>
                <div className='readmoreSection3CardBox'>

                    <div className='cardWrap'>
                        <div className='benefitCard'>
                            <img src={Verified} />
                            <h1>Data Protection</h1>
                            <p>Enhances understanding of security protocols, <br />
                                safeguarding sensitive customer data and minimizing <br />
                                risks of breaches.
                            </p>
                        </div>

                        <div className='benefitCard'>
                            <img src={Riskmanagement} />
                            <h1>Risk Mitigation</h1>
                            <p>
                                Equips sales staff with knowledge to identify and <br />
                                respond to potential security threats, reducing <br />
                                vulnerabilities in customer interactions.
                            </p>
                        </div>
                    </div>

                    <div className='cardWrap'>
                        <div className='benefitCard'>
                            <img src={policy} />
                            <h1>Compliance Adherence</h1>
                            <p>Enhances understanding of security protocols, <br />
                                safeguarding sensitive customer data and minimizing <br />
                                risks of breaches.
                            </p>
                        </div>

                        <div className='benefitCard'>
                            <img src={reputation} />
                            <h1>Brand Reputation</h1>
                            <p>Enhances understanding of security protocols, <br />
                                safeguarding sensitive customer data and minimizing <br />
                                risks of breaches.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='readmoreSection4'>
                <h1>What Do Our Customers Say?</h1>
                <div className='readmoreSection4CardBox'>
                    <div className='testimonialCard'>
                        <img src={review} className='review'/>
                        <p>As a sales manager, I've been impressed by the comprehensive training. The interactive nature of the courses keeps our team engaged and motivated to learn.</p>
                        <img src={testimonial1}/>
                    </div>

                    <div className='testimonialCard'>
                        <img src={review} className='review'/>
                        <p>As a sales manager, I've been impressed by the comprehensive training. The interactive nature of the courses keeps our team engaged and motivated to learn.</p>
                        <img src={testimonial2}/>
                    </div>

                    <div className='testimonialCard'>
                        <img src={review} className='review'/>
                        <p>As a sales manager, I've been impressed by the comprehensive training. The interactive nature of the courses keeps our team engaged and motivated to learn.</p>
                        <img src={testimonial3}/>
                    </div>
                </div>
                <Link>See all</Link>
            </div>

            <div className='demoSection'>
                <div className='demoTextBox'>
                    <h1>Book A Demo</h1>
                    <p>Would your sales department benefit from implementing powerful security awareness training? If so, please take a moment to complete the form below to request a free demo of our platform in action.</p>
                    <Link><button className='leftBodyButton1'>Free teams demo <h4><EventAvailableOutlinedIcon className='icons' /></h4></button></Link>
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
                        <li><Link to='/privacypolicy' className='footerLink'>Terms of Service</Link></li>
                        <li><Link to='/privacypolicy' className='footerLink'>Privacy Policy</Link></li>
                        <li><Link to='/privacypolicy' className='footerLink'>Accessibility Statement</Link></li>
                    </div>
                    <div className='lowerFooterRight'>
                        <li>&copy; 2024 ShieldEd. All rights reserved.</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Readmore
