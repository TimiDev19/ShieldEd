import '../styles/unitCompletion.css';
import { Link } from 'react-router-dom';
import Badge  from '../assets/completionBadge.png';



const unitCompletion = () => {
    return ( 
        <div className="unitContainer">
            <div className='unitCompleted'>
                <h2>UNIT COMPLETED!</h2>
                <img src={Badge}/>
                <Link className="completedButton1">Continue </Link>
                <Link to='/courses' className='completedButton2'>Review Unit</Link>
            </div>
        </div>
     );
}
 
export default unitCompletion;
