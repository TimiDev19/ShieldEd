import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/loginPage.css'
import loginBG from '../assets/loginBackground.png'
import whiteIcon from '../assets/whiteIcon.png'
import googleImage from '../assets/google.png'
import { CloseOutlined } from '@mui/icons-material'

function loginPage() {
    return (
        <div className='loginPage'>
            <div className='leftLoginPage' style={{ backgroundImage: `url(${loginBG})` }}>
                <div className='leftLoginBox'>
                    <img src={whiteIcon} />
                    <h1>Learn with us</h1>
                    <p>
                        Sign in to access our interactive courses and <br />gamified challenges. Let's stay secured and <br />stay educated.
                    </p>

                </div>
            </div>
            <div className='rightLoginPage'>
                <div className='rightLoginFormBox'>
                <Link to='/'><CloseOutlined className='icons' /></Link>
                    <h3>Welcome Back</h3>
                    <h5>Continue our learning with ShieldEd</h5>
                    <div className='rightLoginFormInputBox'>
                        <label>Email</label>
                        <input placeholder='Enter your email' />
                        <label>Password</label>
                        <input type='password' placeholder='Enter your password' />
                        <div className='bottomLabel'><h5>Forgot Password?</h5></div>
                    </div>
                    <Link className='loginButton' to='/dashboard'>Login</Link>
                    <h1>OR</h1>
                    <Link className='googleButtonLink' to='/'>
                        <div className='googleButton'>
                            <img src={googleImage}/>
                            <h4>Sign in with Google</h4>
                        </div>
                    </Link>
                    <h10>Don't have an account? <span><Link to='/newSignup'>Sign Up</Link></span></h10>
                </div>
            </div>
        </div>
    )
}

export default loginPage
