import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Frame 1.png'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import card5 from '../assets/card5.png'
import card6 from '../assets/card6.png'
import icon from '../assets/newicon.png'
import newIcon from '../assets/icon.png'
import HexagonRoundedIcon from '@mui/icons-material/HexagonRounded';
import ShieldIcon from '@mui/icons-material/Shield';
import PopupExample from '../components/Popup';
import learningHexagons from '../assets/learningCardHexagonSet.png'
import learningHexagons2 from '../assets/learningHexagon2.png'

import '../styles/Courses.css'

// import '../styles/Courses.css'

import SearchIcon from '@mui/icons-material/Search';
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
import avatar from '../assets/Avatars.png';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import learningCard from './learningCard';
import { HexagonRounded } from '@mui/icons-material'
import learningCard1 from '../assets/learningframe1.png';
import learningCard2 from '../assets/learningframe2.png';
import learningReward from '../assets/Reward.png'
import subject from '../assets/Subject.png';
import subject1 from '../assets/Subject2.png'
import subject2 from '../assets/subject3.png'


function coursePage() {

    const cards = [
        {
            header: "Spoofed Email Addresses",
            paragraph: "Attackers may disguise their email addresses to appear as if they're from legitimate organizations.",
            image: subject2
        },
        {
            header: "Deceptive Links",
            paragraph: "Links in phishing emails may lead to fake websites designed to steal login credentials or install malware on the victim's device.",
            image: subject1
        },
        {
            header: "Urgent Requests",
            paragraph: "Phishing emails often contain urgent language or threats to create a sense of urgency and pressure the recipient into taking immediate action.",
            image: subject
        }
    ];

    // const [isMenuOpen, setMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //     setMenuOpen(!isMenuOpen);
    // };

    return (
        <>
            {/* <nav className="navbar">
                <div className="logo"><img src={Logo} /></div>
                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <li><Link><div className='menuLinkSelected'>HOME</div></Link></li>
                    <li><Link><div className='menuLink'>LEADERBOARDS</div></Link></li>
                    <li><Link><div className='menuLink'>PRACTICE</div></Link></li>
                    <li><Link><div className='menuLink'>EVENTS AND WEBINARS</div></Link></li>
                    <li><Link><div className='menuLink'>SHOP</div></Link></li>
                    <li><Link><div className='menuLink'>SHIELDED FOR TEAMS</div></Link></li>
                    <li><Link><div className='menuLink'>SETTINGS</div></Link></li>
                    <li><Link><div className='menuLink'>HELP</div></Link></li>
                </ul>
                <div className="burger-menu" onClick={toggleMenu}>&#9776;</div>
            </nav> */}


            <div className="page-container">
                <div className="Dashboardsidebar">
                    <ul className="sidebar-menu">
                        <Link to="/"><div className="logo"><img src={Logo} alt='Sheilded Logo' /></div></Link>
                        <div className='dashboardLeftSideTop'>
                            <Link to="/dashboard"><div className='menuLinkSelected'><SchoolOutlinedIcon className='icons' />HOME</div></Link>
                            <Link to='/leaderboard'><div className='menuLink'><LeaderboardOutlinedIcon className='icons' />LEADERBOARDS</div></Link>
                            <Link><div className='menuLink'><CreateOutlinedIcon className='icons' />PRACTICE</div></Link>
                            <Link><div className='menuLink'><CardMembershipOutlinedIcon className='icons' />EVENTS AND WEBINARS</div></Link>
                        </div>
                        <div className='menuLinkBottom'>
                            <Link to='/shop'><div className='menuLink'><StorefrontOutlinedIcon className='icons' />SHOP</div></Link>
                            <Link><div className='menuLink'><Groups2OutlinedIcon className='icons' />SHIELDED FOR TEAMS</div></Link>
                        </div>
                        {/* Add more sidebar menu items as needed */}
                    </ul>
                    <div className='sideBarBottom'>
                        <Link><div className='menuLink'><SettingsOutlinedIcon className='icons' />Settings</div></Link>
                        <Link><div className='menuLink'><HelpOutlineOutlinedIcon className='icons' />Help</div></Link>
                        <div className='profileBox'>
                            <img src={avatar} />
                            <div className='profileText'>
                                <h4>Gabriella Blu</h4>
                                <h6>gabriella@gmail.com</h6>
                            </div>
                            <Link to='/'><LogoutIcon className='icons' /></Link>
                        </div>
                    </div>
                </div>
                <div className="content">

                    <div className='courseContentNavbar'>
                        <div className='dropdownBox'>
                            <div className='lefSideOfNavbar'>
                                <Link to="/dashboard"><KeyboardBackspaceRoundedIcon className='icons' /></Link>
                                <h2>Understanding Phishing Attacks</h2>
                            </div>
                        </div>
                        <div className='currencyBox'>
                            <div className='gameCurrency'>
                                <h4><img src={newIcon} />100</h4>
                                <h4><WhatshotOutlinedIcon className='icons' /> 20</h4>
                                <h4><FavoriteIcon className='icons-heart' />10</h4>
                            </div>
                        </div>
                        <div className='hiddenDropdown'>
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
                            {/* <div className="hexagon-container">
                                <div className='hexagonIconBox'>
                                    <HexagonRounded className='icons' />
                                </div>
                            </div> */}

                            <div className='learningCardBox'>
                                <div className='learningCardHeader'>
                                    <div className='learningCardHeaderText'>
                                        <h4>UNIT 1 <PopupExample cards={cards} /></h4>
                                        <h2>Common Phishing Techniques</h2>
                                    </div>
                                    {/* <Link to="/learningCard">Learning Cards</Link> */}
                                </div>
                            </div>
                            <Link to='/challenges'>
                                <img src={learningHexagons} className='hexagonSet' />
                            </Link>




                            <div className='learningCardBox'>
                                <div className='learningCardHeader'>
                                    <div className='learningCardHeaderText'>
                                        <h4>UNIT 2 <PopupExample cards={cards} /></h4>
                                        <h2>Spotting Suspicious Sender Addresses</h2>
                                    </div>

                                </div>
                            </div>
                            <img src={learningHexagons2} className='hexagonSet' />

                            <div className='learningCardBox'>
                                <div className='learningCardHeader'>
                                    <div className='learningCardHeaderText'>
                                        <h4>UNIT 3 <PopupExample cards={cards} /></h4>
                                        <h2>Analyzing Phishing Email Content</h2>
                                    </div>

                                </div>
                            </div>
                            <img src={learningHexagons2} className='hexagonSet' />


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
                                <img src={card6} />
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

export default coursePage
