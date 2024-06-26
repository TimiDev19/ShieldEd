import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Frame 1.png'
import Frame1L from '../assets/Frame 1L.png'
import Frame2L from '../assets/Frame 2L.png'
import icon from '../assets/newicon.png'
import newIcon from '../assets/icon.png'
import ShieldIcon from '@mui/icons-material/Shield';
import '../styles/leaderboard.css'
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
import learningCard from './learningCard';
import LandingPage from './LandingPage'


function Leaderboard() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <>
            {/* <nav className="navbar">
                <div className="logo"><img src={Logo} /></div>
                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <li><Link to="/Dashboard"><div className='menuLink'>LEARN</div></Link></li>
                    <li><Link><div className='menuLinkSelected'>LEADERBOARDS</div></Link></li>
                    <li><Link><div className='menuLink'>PRACTICE</div></Link></li>
                    <li><Link><div className='menuLink'>EVENTS AND WEBINARS</div></Link></li>
                    <li><Link to="/shop"><div className='menuLink'>SHOP</div></Link></li>
                    <li><Link><div className='menuLink'>SHIELDED FOR TEAMS</div></Link></li>
                    <li><Link><div className='menuLink'>SETTINGS</div></Link></li>
                    <li><Link><div className='menuLink'>HELP</div></Link></li>
                </ul>
                <div className="burger-menu" onClick={toggleMenu}>&#9776;</div>
            </nav> */}

            <div className="page-container">
                <div className="sidebar">
                    <ul className="sidebar-menu">
                    <Link to='/'><img src={Logo} /></Link>
                        <div className='leaderboardLeftSideTop'>
                            <Link to="/Dashboard"><div className='menuLink'><SchoolOutlinedIcon className='icons' />HOME</div></Link>
                            <Link><div className='menuLinkSelected'><LeaderboardOutlinedIcon className='icons' />LEADERBOARDS</div></Link>
                            <Link><div className='menuLink'><CreateOutlinedIcon className='icons' />PRACTICE</div></Link>
                            <Link><div className='menuLink'><CardMembershipOutlinedIcon className='icons' />EVENTS AND WEBINARS</div></Link>
                        </div>
                        <div className='menuLinkBottom'>
                            <Link to="/shop"><div className='menuLink'><StorefrontOutlinedIcon className='icons' />SHOP</div></Link>
                            <Link><div className='menuLink'><Groups2OutlinedIcon className='icons' />SHIELDED FOR TEAMS</div></Link>
                        </div>
                        {/* Add more sidebar menu items as needed */}
                        <div className='leadercompil'>
                        </div>
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
                    <div className='leaderboardContainer'>
                        <div className='leaderboardTop'>
                            <div className='leaderboardLeft'>
                                <div className='leaderboardLeftStepUp'>

                                </div>

                            </div>
                            <div className='leaderboardMiddle'>
                                <div className='leaderboardMiddleStepUp'>

                                </div>
                            </div>
                            <div className='leaderboardRight'>
                                <div className='leaderboardRightStepUp'>

                                </div>
                            </div>
                        </div>
                        <div className='leaderboardBottom'>
                            <div className='leaderboardItem'>
                                <h2>4. Rotimi Oluwatimilehin Ayodeji</h2>
                                <h3>2360 points</h3>
                            </div>
                            <div className='leaderboardItem'>
                                <h2>5. Olufadi Abdulmajeed Abolarinwa</h2>
                                <h3>2300 points</h3>
                            </div>
                            <div className='leaderboardItem'>
                                <h2>6. Abdulkadir Fawaz Tomilola</h2>
                                <h3>2290 points</h3>
                            </div>
                            <div className='leaderboardItem'>
                                <h2>7. Adekola Abdulrahman Abidemi</h2>
                                <h3>2289 points</h3>
                            </div>
                            <div className='leaderboardItem'>
                                <h2>8. Adebisi Habeeb Omotoni</h2>
                                <h3>2260 points</h3>
                            </div>
                            <div className='leaderboardItem'>
                                <h2>9. Playboy Carti</h2>
                                <h3>1356 points</h3>
                            </div>
                            <div className='leaderboardItem'>
                                <h2>10. Shola Abdulrahman</h2>
                                <h3>1250 points</h3>
                            </div>
                            <div className='leaderboardItem'>
                                <h2>11. Moshood Jamaal Oluwatosin</h2>
                                <h3>1240 points</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}

export default Leaderboard