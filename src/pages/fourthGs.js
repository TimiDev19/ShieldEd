import '../styles/fourthGs.css';
import { Link } from 'react-router-dom';
import blueIcon from '../assets/Frame 1.png'
import teddy from '../assets/teddybear.png'
import { CloseOutlined } from '@mui/icons-material'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const fourthGs = () => {
    return ( 
        <div className='fourthContainer'>
            <div className='fourthleft'>
                <div className='fourthleftBox'>
                    <img src={blueIcon} />
                    <h1>Let's Tailor Your <br/> Learning Journey!</h1>
                    <p>
                    By answering a few quick questions, we <br/>can tailor your learning experience to <br/>suit your needs and preferences.
                    </p>
                    <div className='secondImage'>
                        <img src={teddy}/>
                    </div>
                </div>
            </div>

            <div className='fourthright'>
                <div className='fourthrightBox'>
                    <Link to='/'><CloseOutlined className='icon1' /></Link>
                    <h2>Let’s remind you and help <br/> make learning a habit</h2>

                    <div className='littleCard'>
                        <img src={blueIcon}/> 
                        <p className='text'> wants to</p>
                        <CloseOutlined className='icon2' />
                        <p><NotificationsNoneOutlinedIcon/> Show notification</p>
                        <Link className='firstbutton'>Decline</Link>
                        <Link className='firstbutton'>Allow</Link>
                    </div>

                    <Link to='/fifthStart' className='secondbutton'>Continue</Link>
                </div>
            </div> 
        </div>
     );
}
 
export default fourthGs;