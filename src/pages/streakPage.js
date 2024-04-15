import '../styles/streakPage.css';
import { Link } from 'react-router-dom';
import streakImage2 from '../assets/streakImage.png'

const streak = () => {
    return ( 
        <div className="streakContainer">
            <div className='streakBox'>
                <h2>ONE STREAK!</h2>
                <img src={streakImage2}/>
                <ul>
                    <div className='streakbutton'>
                    <li><Link to='/getStarted1' className="streakButton1">Continue </Link></li>
                    <li><Link className='streakButton1'>What’s a streak</Link></li>
                    </div>
                </ul>
            </div>
        </div>
     );
}
 
export default streak;