import '../styles/learningCard.css';
import learningCardImage1 from '../assets/learningCardImage1.png';
import subject from '../assets/Subject.png';
import subject2 from  '../assets/Subject2.png';
import subject3 from '../assets/subject3.png';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';

const learningCard = () => {
  
    return (
        <div className="App">

            <div className='learningHeader'>
                  <Link to='/'><CloseIcon className='icons'/></Link>
                  <div className='learning'>
              <button className='btn'>UNIT 1</button>
              <h4 className="text">Common Phishing Techniques</h4>
              <p className="text-two">Before you begin the challenge, let's learn about common tactics used by <br/>cybercriminals in phishing attacks.</p>
              </div>

              <div className='hidden'></div>
            </div>
      
        

            <div className='learningContainer'>
            <div className='learningCardBox'>
                  <div className='learningCardGridBox'>
                        <div className='learningCard'>
                              <h3>Spoofed Email Address</h3>
                              <p>
                              Attackers may disguise their email addresses to appear as if they're from legitimate organizations.
                              </p>
                              <img src={learningCardImage1}/>
                        </div>
                        <div className='learningCard'>
                        <h3>Deceptive Links</h3>
                              <p>
                              Links in phishing emails may lead to fake websites designed to steal login credentials or install malware on the victim's device.
                              </p>
                              <img src={subject3}/>
                        </div>
                  </div>
                  <div className='learningCardBox'>
                        <div className='loneLearningCard'>
                              <h3>Urgent Requests</h3>
                              <p>
                              Phishing emails often contain urgent language or threats to create a sense of urgency and pressure the recipient into taking immediate action.
                              </p>
                              <div className='imgBox'>
                              <img src={subject}/>
                              <img src={subject2} className='lowerImage'/>
                              </div>
                        </div>
                  </div>
              </div>
            

            </div>
            <div className='secondBtn'>
                  <Link to="/challenges"><button className='btn2'>Start challenge <h4><WhatshotOutlinedIcon className='icons' /></h4></button></Link>
            </div>
        </div>
        
      );
};

export default learningCard;

// import logo from './logo.svg';
// import './App.css';

// function App() {
  
// }

// export default App;
