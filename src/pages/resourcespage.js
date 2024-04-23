import '../styles/resources.css';
import { Link } from 'react-router-dom';
import resource from '../assets/resource.png'
import { CloseOutlined } from '@mui/icons-material'
import Resource2 from '../assets/Resource2.png'
import resourceicon1 from '../assets/resourceicon1.png'
import resourceicon2 from '../assets/resourceicon2.png'
import resourceicon3 from '../assets/resourceicon3.png'

const resources = () => {
    return ( 
        <div className='step2'>
            <div className='leftStep2'>
                <div className='leftStep2Box'>
                    <h1> Resources </h1>
                    <h6>
                    Our free awareness assets can be <br/> used to help improve cyber security <br/> awareness.
                    </h6>
                    <div className='blog'>
                    <img src={resourceicon1} className='resourceicon1'/>
                    <h3>Blog</h3>
                    </div> 
                    <div className='blog'>
                    <img src={resourceicon2} className='resourceicon1'/>
                    <h3>New Room</h3>
                    </div> 
                    <div className='blog'>
                    <img src={resourceicon3} className='resourceicon1'/>
                    <h3>Community</h3>
                    </div> 
                </div>
            </div>

            <div className='rightStep2'>
                <div className='rightStep2Box'>
                <h3 className='right1'> <u>Family Crash Course </u> </h3>
                <h6 className='right2'>Videos filled with stories and tips to educate your family and keep <br/> them safer in the digital world.</h6>
                <h3 className='right1'> <u>Cybernary </u> </h3>
                <h6 className='right2'>A Glossary Of Must-Know Cyber Security Terms </h6>
                <h3 className='right1'> <u>Events and Webinars </u> </h3>
                <h6 className='right2'>Learn from our amazing panelists on topics from creating security <br/> awareness programs </h6>
                <h3 className='right1'> <u>Free Awareness Posters </u> </h3>
                <h6 className='right2'>Download Our Free Awareness Assets To Improve Cyber Security <br/> Awareness In Your Organisation </h6>
                </div>
            </div>

        </div>
     );
}
 
export default resources;