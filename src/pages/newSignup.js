import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/newSignup.css'
import signupBackground from '../assets/signupBackground.png'
import whiteIcon from '../assets/whiteIcon.png'
import googleImage from '../assets/google.png'
import { CloseOutlined } from '@mui/icons-material'
import loginPage from './loginPage'


function newSignup() {
    return (
        <div className='loginPage'>
            <div className='leftLoginPage' style={{ backgroundImage: `url(${signupBackground})` }}>
                <div className='leftLoginBox'>
                    <img src={whiteIcon} />
                    <h1>Learn with us</h1>
                    <p>
                        Sign in to access our interactive courses and <br />gamified challenges. Let's stay secured and <br />stay educated.
                    </p>

                </div>
            </div>
            <div className='rightPage'>
                <div className='rightFormBox'>
                <Link to='/'><CloseOutlined className='icons' /></Link>
                <h3>Create your profile</h3>
                    <div className='rightFormInputBox'>
                        <label>Name</label>
                        <input placeholder='Name' type='text'/>
                        <label>Email</label>
                        <input placeholder='Enter your email' type='email'/>
                        <label>Password</label>
                        <input placeholder='Enter your password' type='password'/>
                        <h6 className='bottomLabels'>Use 8 or more characters with a mix of letters, numbers & symbols</h6>
                        
                        <div className='checkboxContainer'>
                            <input type='checkbox' />
                            <div>
                                <h10>By creating an account, I agree to our <Link>Terms of use</Link> and <Link>Privacy Policy</Link> </h10>
                            </div>
                        </div>

                     

                        <Link className='createAccountBtn' to='/dashboard'>Sign Up</Link>

                        <div className='orBox'><h14>OR</h14></div>
                    <Link className='googleButtonLink' to='/dashboard'>
                        <div className='googleButton'>
                            <img src={googleImage}/>
                            <h4>Sign in with Google</h4>
                        </div>
                    </Link>
                    <h10>Already have an account? <span><Link to='/loginPage'>Login</Link></span></h10>
                </div>
            </div>
        </div>
        </div>
    )
}

export default newSignup
