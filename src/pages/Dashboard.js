import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Frame 1.png'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import card5 from '../assets/card5.png'
import card6 from '../assets/card6.png'
import icon from '../assets/newicon.png'
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
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Dashboard() {
    return (
        <div className="page-container">
            <div className="sidebar">
                <ul className="sidebar-menu">
                    <img src={Logo} />
                    <div className='dashboardLeftSideTop'>
                        <Link><div className='menuLinkSelected'><SchoolOutlinedIcon className='icons' />LEARN</div></Link>
                        <Link><div className='menuLink'><LeaderboardOutlinedIcon className='icons' />LEADERBOARDS</div></Link>
                        <Link><div className='menuLink'><CreateOutlinedIcon className='icons' />PRACTICE</div></Link>
                        <Link><div className='menuLink'><CardMembershipOutlinedIcon className='icons' />EVENTS AND WEBINARS</div></Link>
                    </div>
                    <div className='menuLinkBottom'>
                        <Link><div className='menuLink'><StorefrontOutlinedIcon className='icons' />SHOP</div></Link>
                        <Link><div className='menuLink'><Groups2OutlinedIcon className='icons' />SHIELDED FOR TEAMS</div></Link>
                    </div>
                    {/* Add more sidebar menu items as needed */}
                </ul>
                <div className='sideBarBottom'>
                    <Link><div className='menuLink'><SettingsOutlinedIcon className='icons' />Settings</div></Link>
                    <Link><div className='menuLink'><HelpOutlineOutlinedIcon className='icons' />Help</div></Link>
                </div>
            </div>
            <div className="content">
                <div className='contentHeader'>
                    <div className='headerText'>
                        <h2>Welcome Back, Gabriella <br /> <span>What are you learning today?</span></h2>
                    </div>
                    <input type='search' className='headerSearchbox' placeholder='search' />
                </div>
                <div className='headerHanger'>
                    <select>
                        <option>Understanding Phishing Attacks  </option>
                        <option>Violin</option>
                        <option>Saxophone</option>
                        <option>None</option>
                    </select>
                    <div className='gameCurrency'>
                        <h4><img src={icon} />100</h4>
                        <h4><WhatshotOutlinedIcon className='icons' /> 20</h4>
                        <h4><FavoriteIcon className='icons-heart' />10</h4>
                    </div>
                </div>
                <div className='cardContainer'>
                    <div className='leftCardBox'>
                        <div className='card'>
                            <div className='cardContent'>
                                <div>
                                    <div className='cardText'>
                                        <h3>COURSE 1</h3>
                                        <div className='bullet'></div>
                                        <Link>SEE DETAILS</Link>
                                    </div>
                                    <div className='cardParagraph'>
                                        <p><span>Recognizing Phishing Emails</span> <br /> Learn about the various tactics used by <br /> cybercriminals to deceive users.</p>
                                    </div>
                                    <h2>3 UNITS</h2>
                                    <div className='progressBar'>
                                        <div className='progress'></div>
                                    </div>
                                    <div className='cardButton'>
                                        <Link>Continue</Link>
                                    </div>
                                </div>
                                <img src={card1} />
                            </div>

                        </div>


                        <div className='card'>
                            <div className='cardContent'>
                                <div>
                                    <div className='cardText'>
                                        <h3>COURSE 2</h3>
                                        <div className='bullet'></div>
                                        <Link>SEE DETAILS</Link>
                                    </div>
                                    <div className='cardParagraph'>
                                        <p><span>Avoiding Phishing Scams</span> <br /> Learn the psychological manipulation techniques used by cybercriminals.</p>
                                    </div>
                                    <h2>3 UNITS</h2>
                                    <div className='progressBar'>
                                        <div className='progress'></div>
                                    </div>
                                    <div className='cardButton'>
                                        <Link>Start Learning</Link>
                                    </div>
                                </div>
                                <img src={card2} />
                            </div>

                        </div>


                        <div className='card'>
                            <div className='cardContent'>
                                <div>
                                    <div className='cardText'>
                                        <h3>COURSE 3</h3>
                                        <div className='bullet'></div>
                                        <Link>SEE DETAILS</Link>
                                    </div>
                                    <div className='cardParagraph'>
                                        <p><span>Reporting and Responding to Phishing Attempts</span> <br /> Learn how to report suspicious emails to the appropriate authorities</p>
                                    </div>
                                    <h2>3 UNITS</h2>
                                    <div className='progressBar'>
                                        <div className='progress'></div>
                                    </div>
                                    <div className='cardButton'>
                                        <Link>Start Learning</Link>
                                    </div>
                                </div>
                                <img src={card3} />
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
                            <img src={card4} />
                        </div>


                        <div className='smallCard'>
                            <img src={card5} className='trophyImage' />
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
                            <img src={card6}/>
                        </div>


                        <div className='advertCard'>
                            <div className='advertCardTextBox'>
                                <h1>6 Month Intensive Fellowship</h1>
                                <h3>Calling on African women to learn a digital skill for free</h3>
                            </div>
                            <div className='advertLinks'>
                                <div className='advertIcons'>
                                    <CloseOutlinedIcon/>
                                    <InfoOutlinedIcon/>
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
    )
}

export default Dashboard
