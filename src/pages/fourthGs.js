import '../styles/fourthGs.css';
import { Link } from 'react-router-dom';
import blueIcon from '../assets/Frame 1.png'
import teddy from '../assets/teddybear.png'
import { CloseOutlined } from '@mui/icons-material'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import prog3 from '../assets/Imageprog3.png'

const fourthGs = () => {
    return (
        <div className='fourthContainer'>
            <div className='fourthleft'>
                <div className='fourthleftBox'>
                    <img src={blueIcon} alt='Shielded logo'/>
                    <h1>Let's Tailor Your <br /> Learning Journey!</h1>
                    <p>
                        By answering a few quick questions, we <br />can tailor your learning experience to <br />suit your needs and preferences.
                    </p>
                    <div className='Prog3'>
                    <img src={prog3} />
                    </div>
                    <div className='ProgText3'>
                        <p>Stage0</p>
                        <p>Stage4</p>
                    </div>
                    <div className='secondImage'>
                        <img src={teddy} alt=''/>
                    </div>
                </div>
            </div>

            <div className='fourthright'>
                <div className='fourthrightBox'>
                    <Link to='/'><CloseOutlined className='icon1' /></Link>
                    <h2>Let’s remind you and help <br /> make learning a habit</h2>

                    <div className='littleCard'>
                        <div className='littleCardTopBox'>
                            <div className='littleCardTopBoxLeft'>
                                <img src={blueIcon} alt='Sheiled logo'/>
                                <h4>wants to</h4>
                            </div>

                            <CloseOutlined className='littleCardIcon'/>
                        </div>
                        <div className='littleCardBottomBox'>
                            <NotificationsNoneOutlinedIcon className='littleCardBottomBoxIcon'/>
                            <h4>Show Notifications</h4>
                        </div>
                        <div className='littleCardButtonContainer'>
                            <Link className='littleCardUnhighlitedButton'>Decline</Link>
                            <Link className='littleCardHighlitedButton'>Accept</Link>
                        </div>
                    </div>

                    <Link to='/fifthStart' className='secondbutton'>Continue</Link>
                </div>
            </div>
        </div>
    );
}

export default fourthGs;