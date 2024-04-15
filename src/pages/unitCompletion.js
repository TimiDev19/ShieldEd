import '../styles/unitCompletion.css';
import { Link } from 'react-router-dom';
import Badge  from '../assets/completionBadge.png';



const unitCompletion = () => {
    return ( 
        <div className="unitContainer">
            <div className='unitCompleted'>
                <h2>UNIT COMPLETED!</h2>
                <img src={Badge}/>
                <ul>
                    <div className='completedbutton'>
                    <li><Link to='/streakPage' className="completedButton1">Continue </Link></li>
                    <li><Link to='/courses' className='completedButton1'>Review Unit</Link></li>
                    </div>
                </ul>
            </div>
        </div>
     );
}
 
export default unitCompletion;
