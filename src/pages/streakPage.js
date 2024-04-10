import '../styles/streakPage.css';
import { Link } from 'react-router-dom';
import streakImage from '../assets/streakImage.png'

const streak = () => {
    return ( 
        <div className="streakContainer">
            <div className='streakBox'>
                <h2>ONE STREAK!</h2>
                <img src={streakImage}/>
                <Link to='/courses' className="streakButton1">Continue </Link>
                <Link className='streakButton2'>What’s a streak</Link>
            </div>
        </div>
     );
}
 
export default streak;