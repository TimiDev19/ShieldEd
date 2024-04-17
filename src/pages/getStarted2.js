import '../styles/getStarted2.css';
import { Link } from 'react-router-dom';
import blueIcon from '../assets/Frame 1.png'
import teddy from '../assets/teddybear.png'
import { CloseOutlined } from '@mui/icons-material'
import progress1 from '../assets/Imageprog1.png'

const getStarted2 = () => {
    return ( 
        <div className='step2'>
            <div className='leftStep2'>
                <div className='leftStep2Box'>
                    <img src={blueIcon} />
                    <h1>Let's Tailor Your <br/> Learning Journey!</h1>
                    <p>
                    By answering a few quick questions, we <br/> can tailor your learning experience to <br/> suit your needs and preferences.
                    </p>
                    <div className='prog1'>
                    <img src={progress1} />
                    </div>
                    <div className='progText1'>
                        <p>Stage0</p>
                        <p>Stage4</p>
                    </div>
                    <div className='secondImage'>
                        <img src={teddy}/>
                    </div>
                </div>
            </div>

            <div className='rightStep2'>
                <div className='rightStep2Box'>
                <Link to='/'><CloseOutlined className='icons' /></Link>
                <h2> How much do you know <br/>Cybersecurity ?</h2>   
                    <div className='buttons'>
                     <ul>
                        <div className='style'>
                        <li><Link className="button1">I have no idea at all </Link></li>
                        <li><Link className='button1'>I know just basic words and concepts</Link></li>
                        <li><Link className='button1'>I am intermediate or higher</Link></li>
                        <li><Link to='/getStarted3' className='button2'>Continue</Link></li>
                        </div>
                     </ul>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default getStarted2;