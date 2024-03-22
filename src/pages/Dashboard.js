import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Frame 1.png'
import '../styles/Dashboard.css'
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

function Dashboard() {
  return (
    <div>
      <div className='dashboardPage'>
        <div className='dashboardLeftSide'>
            <div>
            <img src={Logo} />
            <div className='dashboardLeftSideTop'>
            <Link><div className='menuLinkSelected'><SchoolOutlinedIcon className='icons'/>LEARN</div></Link>
            <Link><div className='menuLink'><LeaderboardOutlinedIcon className='icons'/>LEADERBOARDS</div></Link>
            <Link><div className='menuLink'><CreateOutlinedIcon className='icons'/>PRACTICE</div></Link>
            <Link><div className='menuLink'><CardMembershipOutlinedIcon className='icons'/>EVENTS AND WEBINARS</div></Link>
            </div>
            <Link><div className='menuLink'><StorefrontOutlinedIcon className='icons'/>SHOP</div></Link>
            <Link><div className='menuLink'><Groups2OutlinedIcon className='icons'/>SHIELDED FOR TEAMS</div></Link>
            </div>

            <div>
            <Link><div className='menuLink'><SettingsOutlinedIcon className='icons'/>Settings</div></Link>
            <Link><div className='menuLink'><HelpOutlineOutlinedIcon className='icons'/>Help</div></Link>
            </div>
        </div>
        <div className='dashboardRightSide'>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
