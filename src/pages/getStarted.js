import '../styles/getStarted.css';
import { Link } from 'react-router-dom';
import getStarted1 from '../assets/getStarted1.png'

const getStarted = () => {
    return ( 
        <div className="getStarted-container">
             <div className='step1'>
                <img src={getStarted1}/>
                <p> Don’t loss your progress</p>
                <p>Create a profile to save your progress and continue learning for free.</p>
                <Link to="/login" className='step1Button1'>Create Account</Link>
                <Link to="/signup" className='step1Button2'> Later </Link>
            </div>
        </div>
     );
}
 
export default getStarted;