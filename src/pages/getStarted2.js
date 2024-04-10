import '../styles/getStarted2.css';
import { Link } from 'react-router-dom';
import blueIcon from '../assets/Frame 1.png'
import teddy from '../assets/teddybear.png'
import { CloseOutlined } from '@mui/icons-material'

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
                    <Link className="button1">I have no idea at all </Link>
                    <Link className='button2'>I know just basic words and concepts</Link>
                    <Link className='button3'>I am intermediate or higher</Link>
                    <Link to='/getStarted3'className='button4'>Continue</Link>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default getStarted2;