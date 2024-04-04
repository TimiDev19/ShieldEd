import React from 'react'
import '../styles/signupPage.css'
import signupBackground from '../assets/signupBackground.png'
import { CloseOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import googleImage from '../assets/google.png'
import loginPage from './loginPage'

function signupPage() {
    return (
        <div className='signupPageHome' style={{ backgroundImage: `url(${signupBackground})` }}>
            <Link to='/'><CloseOutlined className='icons' /></Link>
            <div className='signupCardContainer'>
                <div className='signupCard'>
                    <h3>Create your profile</h3>
                    <div className='signupForm'>
                        <label>Name</label>
                        <input placeholder='Name' type='text'/>
                        <label>Email</label>
                        <input placeholder='Enter your email' type='email'/>
                        <label>Password</label>
                        <input placeholder='Enter your password' type='password'/>
                        <h6 className='bottomLabel'>Use 8 or more characters with a mix of letters, numbers & symbols</h6>
                        <div className='checkboxContainer'>
                            <input type='checkbox' />
                            <div>
                                <h10>By creating an account, I agree to our <Link>Terms of use</Link> and <Link>Privacy Policy</Link> </h10>
                            </div>
                        </div>

                        <Link className='createAccountBtn' to='/getStarted'>Create Account</Link>

                        <div className='orBox'><h14>OR</h14></div>

                        <Link className='googleButtonLink' to='/'>
                            <div className='googleButton'>
                                <img src={googleImage} />
                                <h4>Sign in with Google</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <Link className='signupLoginButton' to='/loginPage'>Login</Link>
        </div>
    )
}

export default signupPage
