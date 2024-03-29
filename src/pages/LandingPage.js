import '../styles/LandingPage.css';
import LPtraining from '../assets/LPtraining.png'
import LPTestimonials from '../assets/LPTestimonials.png'
import patternLP from '../assets/patternLP.png'
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import { Link } from 'react-router-dom';

const LandingPage = () => {
 
    return (
        
        <div className='fullLP'>
            <div className='card3Container' style={{backgroundImage:`url(${patternLP})`,backgroundSize: `100% 100%`,  backgroundPosition:`center`, backgroundRepeat:`no-repeat` }}>
                <div className='header'>
                    <header> Cyber Security Training <br/>for Every Department</header>
                </div>
                <div className='cardBody'>
                    <div className='rightBody'>
                        <Link><p className='topParagraph'>Sales Department </p></Link>
                        <h5>Our cybersecurity training for sales departments is <br/> meticulously crafted to address   the vulnerabilities <br/> and threats that sales teams face daily.</h5>
                        <hr/>
                        <Link><p className='smallParagraph'>Finance Teams</p></Link>
                        <hr/>
                        <Link><p className='smallParagraph'>Human Resources</p></Link>
                        <hr/>
                        <Link><p className='smallParagraph'>Marketing Departments</p></Link>
                        <hr/>
                        <Link><p className='smallParagraph'>Procurement Teams</p></Link>
                        <hr/>
                        <Link><p className='smallParagraph'>Legal Departments</p></Link>
                        <hr/>
                        <Link><p className='smallParagraph'>Executive Teams</p></Link>

                    </div>
                    <div className='leftBody'>
                        <img src={LPtraining}/>
                        <div className='buttonContainer'>
                            <Link><button className='button1'>Free teams demo <h4><EventAvailableOutlinedIcon   className='icons'/></h4></button></Link>   <br/>
                            <Link><button className='button2'>Read more</button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default LandingPage;