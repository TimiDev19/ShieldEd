import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Frame 1.png'
import card5 from '../assets/card5.png'
import card6 from '../assets/card6.png'
import newIcon from '../assets/icon.png'
import '../styles/Shop.css'
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
import shopCardBackgroungImage from '../assets/Group.png';
import shopCardImage from '../assets/shopCardImage.png';
import shopHeart from '../assets/shopHeart.png';
import shopHeart1 from '../assets/shopHeart1.png';
import freezeIcon from '../assets/freezeIcon.png';
import hintIcon from '../assets/hintIcon.png';
import mysteryIcon from '../assets/mysteryIcon.png';

function Shop() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <>
                {/* <nav className="navbar">
                    <div className="logo"><img src={Logo} alt='Sheilded Logo'/></div>
                    <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                        <li><Link><div className='menuLink'>HOME</div></Link></li>
                        <li><Link to="/leaderboard"><div className='menuLink'>LEADERBOARDS</div>leaderboard</Link></li>
                        <li><Link><div className='menuLink'>PRACTICE</div></Link></li>
                        <li><Link><div className='menuLink'>EVENTS AND WEBINARS</div></Link></li>
                        <li><Link><div className='menuLinkSelected'>SHOP</div></Link></li>
                        <li><Link><div className='menuLink'>SHIELDED FOR TEAMS</div></Link></li>
                        <li><Link><div className='menuLink'>SETTINGS</div></Link></li>
                        <li><Link><div className='menuLink'>HELP</div></Link></li>
                    </ul>
                    <div className="burger-menu" onClick={toggleMenu}>&#9776;</div>
                </nav> */}


                <div className="dashboard-page-container">
                    <div className="sidebar">
                        <ul className="sidebar-menu">
                            <img src={Logo} alt='Shielded logo'/>
                            <div className='dashboardLeftSideTop'>
                                <Link to='/dashboard'><div className='menuLink'><SchoolOutlinedIcon className='icons' />HOME</div></Link>
                                <Link to="/leaderboard"><div className='menuLink'><LeaderboardOutlinedIcon className='icons' />LEADERBOARDS</div></Link>
                                <Link><div className='menuLink'><CreateOutlinedIcon className='icons' />PRACTICE</div></Link>
                                <Link><div className='menuLink'><CardMembershipOutlinedIcon className='icons' />EVENTS AND WEBINARS</div></Link>
                            </div>
                            <div className='menuLinkBottom'>
                                <Link><div className='menuLinkSelected'><StorefrontOutlinedIcon className='icons' />SHOP</div></Link>
                                <Link><div className='menuLink'><Groups2OutlinedIcon className='icons' />SHIELDED FOR TEAMS</div></Link>
                            </div>
                            {/* Add more sidebar menu items as needed */}
                        </ul>
                        <div className='sideBarBottom'>
                            <Link><div className='menuLink'><SettingsOutlinedIcon className='icons' />Settings</div></Link>
                            <Link><div className='menuLink'><HelpOutlineOutlinedIcon className='icons' />Help</div></Link>
                            <div className='profileBox'>
                                <img src={avatar} alt='profile'/>
                                <div className='profileText'>
                                    <h4>Gabriella Blu</h4>
                                    <h6>gabriella@gmail.com</h6>
                                </div>
                                <Link to='/'><LogoutIcon className='icons' /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='cardContainer'>
                        <div className='leftCardBox'>
                            <div className='shopCard' style={{ backgroundImage: `url(${shopCardBackgroungImage})` }}>
                                <div className='shopCardLeft'>
                                    <h1>Progress faster in Cybersecurity!</h1>
                                    <p>No ads, advanced challenges, and special rewards with Cyber Plus </p>
                                    <Link>Learn More</Link>
                                </div>
                                <img src={shopCardImage} alt=''/>
                            </div>

                            <div className='shopLeftBottom'>
                                <h1>Heart</h1>
                                <div className='shopItemPurchaseBox'>
                                    <div className='shopItemPurchaseBoxLeft'>
                                        <img src={shopHeart} alt=''/>
                                        <div className='shopItemPurchaseBoxText'>
                                            <h3>Heart Refill</h3>
                                            <p>Get full hearts so you never stop playing</p>
                                        </div>
                                    </div>
                                    <Link>FULL</Link>
                                </div>
                                <div className='shopItemPurchaseBox'>
                                    <div className='shopItemPurchaseBoxLeft'>
                                        <img src={shopHeart1} alt=''/>
                                        <div className='shopItemPurchaseBoxText'>
                                            <h3>Unlimited Heart</h3>
                                            <p>Never run out of hearts with Cyber plus</p>
                                        </div>
                                    </div>
                                    <Link>FREE TRIAL</Link>
                                </div>
                                <h1>More</h1>
                                <div className='shopItemPurchaseBox'>
                                    <div className='shopItemPurchaseBoxLeft'>
                                        <img src={freezeIcon} alt=''/>
                                        <div className='shopItemPurchaseBoxText'>
                                            <h3>Freeze Streak</h3>
                                            <p>Allow your streak remain in place for a whole day of inactivity</p>
                                        </div>
                                    </div>
                                    <Link>BUY NOW</Link>
                                </div>
                                <div className='shopItemPurchaseBox'>
                                    <div className='shopItemPurchaseBoxLeft'>
                                        <img src={hintIcon} alt=''/>
                                        <div className='shopItemPurchaseBoxText'>
                                            <h3>Hint Pack</h3>
                                            <p>Purchase hints to solve difficult puzzles and overcome obstacles.</p>
                                        </div>
                                    </div>
                                    <Link>BUY NOW</Link>
                                </div>
                                <div className='shopItemPurchaseBox'>
                                    <div className='shopItemPurchaseBoxLeft'>
                                        <img src={mysteryIcon} alt=''/>
                                        <div className='shopItemPurchaseBoxText'>
                                            <h3>Mystery Box</h3>
                                            <p>Purchase mystery boxes to get rewards and surprises</p>
                                        </div>
                                    </div>
                                    <Link>BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className='shopRightCardBox'>
                            <div className='shopCurrencyCard'>
                                <div className='currencyItemBox'> <img src={newIcon} alt=''/><h4>100</h4> </div>
                                <div className='currencyItemBox'> <WhatshotOutlinedIcon className='icons' /><h4>20</h4> </div>
                                <div className='currencyItemBox'> <FavoriteIcon className='icons-heart' /><h4>10</h4> </div>
                            </div>
                            <div className='scrollableShopRightCardBox'>
                                <div className='smalShopCard'>
                                    <img src={card5} className='trophyImage' alt=''/>
                                    <div className='smallCardTextBox'>
                                        <h2>Shield Master League</h2>
                                        <p>Complete a course to join this week’s leaderboard and compete against other learners</p>
                                        <Link className='smallCardLink'>VIEW LEAGUE</Link>
                                    </div>
                                </div>


                                <div className='smalShopCard'>
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


                                <div className='advertShopCard'>
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
                    </div>
                </div>

            </>
        </div>
    )
}

export default Shop