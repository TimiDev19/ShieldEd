
import "../styles/successPage.css";
import success from '../assets/success.png';
import errorIcon from '../assets/errorIcon.png';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from 'react-router-dom';

function successPage() {
    return (
  
 
  <><div className="card-container">
        <div className="success-card">
          <img src={success} alt="Success" />
          <div class="content">
            <h1>Great Job!</h1>
            <div class="icon"><DescriptionIcon className='icon' />
              <h4>Quiz Report</h4>
            </div>
          </div>
          <Link className='btn' to='/dashboard'>Continue</Link>

        </div>
      </div>
      
      <div className="secondContainer">
          <div className="errorCard">
            <img src={errorIcon} alt="Error" />
            <div class="secondContent">
              <h1>Oops Try Again!</h1>
              <div class="secondIcon"><DescriptionIcon className='icon' />
                <h4>Quiz Report</h4>
              </div>
            </div>
            <Link className='secondBtn' to='/dashboard'>Continue</Link>

          </div>
        </div></>

  
        )
    }
    
    export default successPage