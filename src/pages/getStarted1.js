import '../styles/getStarted1.css';
import { Link } from 'react-router-dom';
import gSimage1 from '../assets/gSimage1.png'

const getStarted1 = () => {
    return ( 
             <div className='step1'>
                <img src={gSimage1}/>
                <p> Don’t loss your progress</p>
                <p>Create a profile to save your progress and continue learning for free.</p>
                <Link to="/getStarted2" className='step1Button1'>Create Account</Link>
                <Link to="/courses" className='step1Button2'> Later </Link>
            </div>
     );
}
 
export default getStarted1;