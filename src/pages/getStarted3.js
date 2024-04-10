import '../styles/getStarted3.css';
import { Link } from 'react-router-dom';
import blueIcon from '../assets/Frame 1.png'
import teddy from '../assets/teddybear.png'
import { CloseOutlined } from '@mui/icons-material'

const getStarted3 = () => {
    return (  
        <div className='step3'>
            <div className='leftStep3'>
                <div className='leftStep3Box'>
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

            <div className='rightStep3'>
                <div className='rightStep3Box'>
                <Link to='/'><CloseOutlined className='icons' /></Link>
                <h2>What’s your daily learning <br/> goal ?</h2>   
                    <div className='buttons'>
                    <Link className="button1">Beginner <span className='endText'> 5mins/day </span> </Link>
                    <Link className='button2'>Determined <span className='endText'> 15mins/day</span></Link>
                    <Link className='button3'>Intense <span className='endText'> 30mins/day</span></Link>
                    <Link to='/fourthGs' className='button4'>I’m ready!</Link>
                    
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default getStarted3;