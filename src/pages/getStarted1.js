import '../styles/getStarted1.css';
import { Link } from 'react-router-dom';
import gSimage1 from '../assets/gSimage1.png'

const getStarted1 = () => {
    return ( 
             <div className='step1'>
                <img src={gSimage1}/>
                <p> Don’t loss your progress</p>
                <p>Create a profile to save your progress and continue learning for free.</p>
                <div className='step1buttons'>
                <ul>
                    <li><Link to='/newSignup'className='step1Button'>Create Account</Link></li>
                    <li><Link to='/' className='step1Button'> Later </Link></li>
                </ul>
                </div>
            </div>
     );
}
 
export default getStarted1;