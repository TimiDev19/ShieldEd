import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Frame 1.png';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';
import newIcon from '../assets/icon.png';
import '../styles/Dashboard.css'
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import avatar from '../assets/Avatars.png';
import LogoutIcon from '@mui/icons-material/Logout';



function Dashboard() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
 
    return (
        <>
            <nav className="navbar">
                <div className="logo"><img src={Logo} alt='Sheilded Logo'/></div>
                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <li><Link><div className='menuLinkSelected'>LEARN</div></Link></li>
                    <li><Link to="/leaderboard"><div className='menuLink'>LEADERBOARDS</div>leaderboard</Link></li>
                    <li><Link><div className='menuLink'>PRACTICE</div></Link></li>
                    <li><Link><div className='menuLink'>EVENTS AND WEBINARS</div></Link></li>
                    <li><Link><div className='menuLink'>SHOP</div></Link></li>
                    <li><Link><div className='menuLink'>SHIELDED FOR TEAMS</div></Link></li>
                    <li><Link><div className='menuLink'>SETTINGS</div></Link></li>
                    <li><Link><div className='menuLink'>HELP</div></Link></li>
                </ul>
                <div className="burger-menu" onClick={toggleMenu}>&#9776;</div>
            </nav>


            <div className="dashboard-page-container">
                <div className="sidebar">
                    <ul className="sidebar-menu">
                        <img src={Logo} alt='Shieled logo'/>
                        <div className='dashboardLeftSideTop'>
                            <Link><div className='menuLinkSelected'><SchoolOutlinedIcon className='icons' />LEARN</div></Link>
                            <Link to ="/leaderboard"><div className='menuLink'><LeaderboardOutlinedIcon className='icons' />LEADERBOARDS</div></Link>
                            <Link><div className='menuLink'><CreateOutlinedIcon className='icons' />PRACTICE</div></Link>
                            <Link><div className='menuLink'><CardMembershipOutlinedIcon className='icons' />EVENTS AND WEBINARS</div></Link>
                        </div>
                        <div className='menuLinkBottom'>
                            <Link to="/shop"><div className='menuLink'><StorefrontOutlinedIcon className='icons' />SHOP</div></Link>
                            <Link><div className='menuLink'><Groups2OutlinedIcon className='icons' />SHIELDED FOR TEAMS</div></Link>
                        </div>
                        {/* Add more sidebar menu items as needed */}
                    </ul>
                    <div className='sideBarBottom'>
                        <Link><div className='menuLink'><SettingsOutlinedIcon className='icons' />Settings</div></Link>
                        <Link><div className='menuLink'><HelpOutlineOutlinedIcon className='icons' />Help</div></Link>
                        <div className='profileBox'>
                            <img src={avatar} alt='Profile'/>
                            <div className='profileText'>
                                <h4>Gabriella Blu</h4>
                                <h6>gabriella@gmail.com</h6>
                            </div>
                            <Link to='/'><LogoutIcon className='icons' /></Link>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className='contentNavbar'>
                        <div className='welcomeText'>
                            <h1>Welcome Back, Gabriella<br /> <span>What are you learning today ?</span></h1>
                        </div>
                        <div className='searchBox'>
                            <div className='searchBar'>
                            <input type='search' placeholder='search' className='searchInput' />
                            </div>
                        </div>
                        <div className='dropdownBox'>
                            <select>
                                <option>Understanding Phishing Attacks  </option>
                                <option>Password Security Best Practices</option>
                                <option>Safe Web Browsing and Online Behavior</option>
                                <option>Securing Your Mobile Devices</option>
                                <option>Protecting Personal Data Online</option>
                                <option>Intro to Two-Factor Authentication (2FA)</option>
                                <option>Recognising and Avoiding Scams</option>
                                <option>Privacy Settings on Social Media Platforms</option>
                                <option>Cyberbullying and Online Harassment</option>
                                {/* <option>None</option> */}
                            </select>
                        </div>
                        <div className='currencyBox'>
                            <div className='gameCurrency'>
                                <h4><img src={newIcon} alt=''/>100</h4>
                                <h4><WhatshotOutlinedIcon className='icons' /> 20</h4>
                                <h4><FavoriteIcon className='icons-heart' />10</h4>
                            </div>
                        </div>
                        <div  className='hiddenDropdown'>
                        <select>
                                <option>Understanding Phishing Attacks  </option>
                                <option>Violin</option>
                                <option>Saxophone</option>
                                <option>None</option>
                            </select>
                        </div>
                    </div>


                    <div className='cardContainer'>
                        <div className='leftCardBox'>
                            <div className='card'>
                                <div className='cardHeader'>
                                    <h1>COURSE 1</h1>
                                    <div className='bullet'></div>
                                    <Link>SEE DETAILS</Link>
                                </div>
                                <div className='cardBody'>
                                    <div className='bodyText'>
                                        <h4>Recognising Phishing Emails</h4>
                                        <p>Learn about the various tactics used by cybercriminals to deceive users.</p>
                                        <h3>3 UNITS</h3>
                                    </div>
                                    <div className='bodyImage'>
                                        <img src={card1} alt=''/>
                                    </div>
                                </div>
                                <div className='progressBar'>
                                    <div className='progress'>
                                        <div className='progressText'>1/3</div>
                                    </div>
                                    <img src={newIcon} alt=''/>
                                </div>
                                <div className='cardButton'>
                                <Link to="/courses">Continue</Link>
                                </div>
                            </div>

                            <div className='card'>
                                <div className='cardHeader'>
                                    <h1>COURSE 2</h1>
                                    <div className='bullet'></div>
                                    <Link>SEE DETAILS</Link>
                                </div>
                                <div className='cardBody'>
                                    <div className='bodyText'>
                                        <h4>Avoiding Phishing Scams</h4>
                                        <p>Learn the psychological manipulation techniques used by cybercriminals</p>
                                        <h3>3 UNITS</h3>
                                    </div>
                                    <div className='bodyImage'>
                                        <img src={card2} alt=''/>
                                    </div>
                                </div>
                                <div className='progressBar'>
                                    <div className='progress'>
                                        <div className='progressText'>0/3</div>
                                    </div>
                                    <img src={newIcon} alt=''/>
                                </div>
                                <div className='cardButton'>
                                    <Link to='/landingPage'>Start Learning</Link>
                                </div>
                            </div>

                            <div className='card'>
                                <div className='cardHeader'>
                                    <h1>COURSE 3</h1>
                                    <div className='bullet'></div>
                                    <Link>SEE DETAILS</Link>
                                </div>
                                <div className='cardBody'>
                                    <div className='bodyText'>
                                        <h4>Reporting and Responding to Phishing Attempts</h4>
                                        <p>Learn how to report suspicious emails to the appropriate authorities</p>
                                        <h3>3 UNITS</h3>
                                    </div>
                                    <div className='bodyImage'>
                                        <img src={card3} alt=''/>
                                    </div>
                                </div>
                                <div className='progressBar'>
                                    <div className='progress'>
                                        <div className='progressText'>0/3</div>
                                    </div>
                                    <img src={newIcon} alt=''/>
                                </div>
                                <div className='cardButton'>
                                    <Link to="/LandingPage">Start Learning</Link>
                                </div>
                            </div>
                        </div>
                        <div className='rightCardBox'>
                            <div className='smallCard'>
                                <div className='smallCardTextBox'>
                                    <h2>Try Cyber Plus For Free</h2>
                                    <p>No ads, advanced challenges and special rewards!</p>
                                    <Link className='smallCardButton'>Try 7 Days For Free</Link>
                                </div>
                                <img src={card4} alt=''/>
                            </div>


                            <div className='smallCard'>
                                <img src={card5} className='trophyImage' alt=''/>
                                <div className='smallCardTextBox'>
                                    <h2>Shield Master League</h2>
                                    <p>Complete a course to join this week’s leaderboard and compete against other learners</p>
                                    <Link className='smallCardLink'>VIEW LEAGUE</Link>
                                </div>
                            </div>


                            <div className='smallCard'>
                                <div className='smallCardTextBox'>
                                    <h2>ShieldEd Chest</h2>
                                    <p>Complete a course to join this week’s leaderboard and compete against other learners</p>
                                    <div className='progressBar'>
                                        <div className='progress'></div>
                                    </div>
                                    <Link className='smallCardLink'>SEE ALL</Link>
                                </div>
                                <img src={card6} alt=''/>
                            </div>


                            <div className='advertCard'>
                                <div className='advertCardTextBox'>
                                    <h1>6 Month Intensive Fellowship</h1>
                                    <h3>Calling on African women to learn a digital skill for free</h3>
                                </div>
                                <div className='advertLinks'>
                                    <div className='advertIcons'>
                                        <CloseOutlinedIcon />
                                        <InfoOutlinedIcon />
                                    </div>
                                    <Link>Women Techstars Fellowship</Link>
                                </div>
                                <center>
                                    <Link className='removeAdvert'>REMOVE ADS</Link>
                                </center>
                            </div>
                        </div>
                    </div>
                    {/* Main content of your page */}
                </div>
            </div>

        </>

    )
}

export default Dashboard
