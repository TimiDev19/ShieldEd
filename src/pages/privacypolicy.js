import React, { useEffect, useRef, useState } from 'react';
import Logo from '../assets/Frame 1.png'
import { Link } from 'react-router-dom';
import '../styles/privacypolicy.css';
import TranslateIcon from '@mui/icons-material/Translate';
import landingImage from '../assets/landingpicture.png';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LandingAvatar1 from '../assets/landingAvatar.png';
import LandingAvatar2 from '../assets/landindAvatar1.png';
import LandingAvatar3 from '../assets/landindAvatar2.png';
import LandingAvatar4 from '../assets/landingAvatar3.png';
import pattern from '../assets/pattern.png'
import ScrollReveal from 'scrollreveal';
import CollapsibleBox from '../components/collapsableBox';
import PopupExample from '../components/Popup';
import section from '../assets/Section.png'
import joinforfree from '../assets/joinforfree.png'
import policyfooter from '../assets/policyfooter.png'


import "../styles/privacypolicy.css";
import leftIcon from "../assets/leftIcon.png";
import rightIcon from "../assets/rightIcon.png";
import sectionThreeIcon from "../assets/sectionThreeIcon.png";
import sectionThreeIconTwo from "../assets/sectionThreeIcontwo.png";
import section3icon from "../assets/section3icon.png";
import section3image from "../assets/section3image.png";
import section3image1 from "../assets/section3image1.png";

import LPtraining from "../assets/LPtraining.png";
import LPTestimonials from "../assets/LPTestimonials.png";
import patternLP from "../assets/patternLP.png";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";

const privacypolicy = () => {

    return (
        <>
            <div className='policyPageContainer'>
                <nav className="policynavbar">
                    <div className="policynavbar-logo"><img src={Logo} /></div>
                    <div className="policynavbar-links">
                        <a href="#home">Learn</a>
                        <a href="#link">Resources</a>
                        <select className='selectone' >
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>
                        <a href="#link">Industries</a>
                        <select className='selectone'>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>
                        <a href="#link">About Us</a>
                        <select className='selectone'>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>
                        <a href="#link">Contact</a>
                    </div>
                    <div className="navbar-links-right">
                        <a href="/loginPage">Login</a>
                        <a href="/getStarted1" className='rightButton'>join for FREE</a>
                        <TranslateIcon className='icons' />
                    </div>
                </nav>
                {/* <CreateOutlinedIcon className='icons' /> */}

                <div className='policysign'>
                <p className='update'><h6> LATEST UPDATE: April 8, 2024</h6></p>
                <h1 className='policywrite'>Privacy Policy</h1>
                </div>
                <div className='policyimage'>
                    <img src={section} className='section'/>
                </div>
                <div className='joinforfree'>
                    <img src={joinforfree} className='joinforfreeo'/>
                </div>
                <div className='policyfooter'>
                    <img src={policyfooter} className='policyfootero'/>
                </div>
                </div>
    </>
  )
}


export default privacypolicy;