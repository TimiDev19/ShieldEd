import '../styles/readMore.css';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import testimonial1 from '../assets/dummyimage1.png'
import testimonial2 from '../assets/dummyimage2.png'
import testimonial3 from '../assets/dummyimage3.png'
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import Logo from '../assets/Frame 1.png'
import pattern from '../assets/pattern.png'

const readMore = () => {
    return ( 
        <div className='mainContainer'>
            <div className='testimonialsContainer'>
                <header>
                <h2>What Do Our Customers Say?</h2>
                </header>
                <div className='testimonialBox'>
                    <div className='testimonial-card'>
                        <span className='stars'>
                            <StarIcon fontSize='small'/>
                            <StarIcon fontSize='small'/>
                            <StarIcon fontSize='small'/>
                            <StarIcon fontSize='small'/>
                            <StarIcon fontSize='small'/>
                        </span>
                        <p>As a sales manager, I've been impressed by the comprehensive training. The interactive nature of the courses keeps our team engaged and motivated to learn. </p>
                        <div className='card-footer'>
                            <img src={testimonial1}/>
                            <span className='Box1-details'>
                                <h4>Obi James</h4>
                                <p>AbasaMart Corporation</p>
                            </span>
                        </div>
                    </div>

                    <div className='testimonial-card'>
                        <span className='stars'>
                            <StarIcon fontSize='small'/>
                            <StarIcon fontSize='small'/>
                            <StarIcon fontSize='small'/>
                            <StarIcon fontSize='small'/>
                            <StarIcon fontSize='small'/>
                        </span>
                        <p>ShieldEd's cybersecurity training program has been invaluable for our sales team. Our employees have gained a deep understanding of cybersecurity threats. </p>
                        <div className='card-footer'>
                            <img src={testimonial2}/>
                            <span className='Box1-details'>
                                <h4>Shien Kui</h4>
                                <p>HappyDay Sales Agency</p>
                            </span>
                        </div>
                    </div>

                    <div className='testimonial-card'>
                        <span className='stars'>
                            <StarIcon fontSize='small' />
                            <StarIcon fontSize='small'/>
                            <StarIcon fontSize='small'/>
                            <StarIcon fontSize='small'/>
                            <StarIcon fontSize='small'/>
                        </span>
                        <p>We've been using ShieldEd's for several months now, and the results have been outstanding. The training modules are tailored to our specific needs.</p>
                        <div className='card-footer'>
                            <img src={testimonial3}/>
                            <span className='Box1-details'>
                                <h4>Angela Fox</h4>
                                <p>Whitey Sales Inc</p>
                            </span>
                        </div>
                    </div>
                    
                </div>

                <Link className='see-allButton'> <p>See all</p></Link>                
            </div>

            <div className='bookDemo-container'>
                <h2>Book A Demo</h2>
                <p>Would your sales department benefit from implementing powerful security <br/>awareness training? If so, please take a moment to complete the form below to<br/> request a free demo of our platform in action.</p>
                <div className='bookdemo-buuton'>
                <Link className='demoButton'>Free teams demo <h4><EventAvailableOutlinedIcon className='icons' /></h4></Link>
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
    );
}
 
export default readMore;