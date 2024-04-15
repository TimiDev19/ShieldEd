import '../styles/fifthStart.css';
import { Link } from 'react-router-dom';
import blueIcon from '../assets/Frame 1.png'
import teddy from '../assets/teddybear.png'
import { CloseOutlined } from '@mui/icons-material'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

const fifthStart = () => {
    return ( 
        <div className='fifthStartContainer'>
            <div className='fifthStartleft'>
                <div className='fifthStartleftBox'>
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

            <div className='fifthStartright'>
                <div className='fifthStartrightBox'>
                    <Link to='/'><CloseOutlined className='iconOne' /></Link>
                    <h2>What’s your best place to<br/> start ?</h2>
                    <div className='fifthStartbuttons'>
                        <ul>
                            <div className='FSfirstbutton'>
                            <li>
                                <Link className='FsOne'>
                                <h3>Start from the scratch</h3>
                                <p>Take the easiest cybersecurity course</p>
                                </Link>
                                <div className='iconConatiner'>
                                <MenuBookOutlinedIcon className='iconTwo'fontSize='large'/>
                                </div>
                            </li>
                            </div>
                            
                            <div className='FSsecondbutton'>
                            <li>
                                <Link className='FsTwo'>
                                <h3>Decide your starting point</h3>
                                <p>Answer some questionsto skip the basics</p>
                                </Link>
                                <div className='iconConatiner'>
                                <ExploreOutlinedIcon className='iconTwo' fontSize='large'/>
                                </div>
                            </li>
                            </div>

                            <div className='FSlastbutton'>
                            <li><Link className='FsThree'>I’m ready!</Link></li>
                            </div>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default fifthStart;