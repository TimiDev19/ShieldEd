import '../styles/learningCard.css';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';

const learningCard = () => {
  
    return (
        <div className="App">
             
              <div className='learning'>
              <button className='btn'>UNIT 1</button>
              <h4 className="text">Common Phishing Techniques</h4>
              <p className="text-two">Before you begin the challenge, let's learn about common tactics used by <br/>cybercriminals in phishing attacks.</p>
              </div>
              
              <div>
              
              </div>
              
              <div className='secondBtn'>
              <button className='btn2'>Start challenge <h4><WhatshotOutlinedIcon className='icons' /></h4></button>
              </div>
            
        </div>
        
      );
};

export default learningCard;

