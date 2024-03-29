import heartIcon from '../assets/heartIcon.png'
import '../styles/challenges.css'
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Favorite } from '@mui/icons-material';
import quizImage from '../assets/quiz-image.png'

const challenges = () => {
  return (
    <div className="challengesContainer">
      <div className='challengesHeader'>
        <Link to="/learningCard"><CloseIcon className='icons' /></Link>
        <div className='challengesProgressBar'>
          <div className='challengesProgress'>
            <div className='challengesText'><h8 className="challengeProgress">1/5</h8></div>
          </div>
        </div>
        <Favorite className='heart'/>
      </div>
      <div className='challengeHeadText'>
        <h3>Identifying Common Phishing Techniques</h3>
        <p>
          A suspicious link has landed in your inbox. Is it a harmless URL or a phishing trap? <br/>
          Analyze the email carefully and make your decision.
        </p>
        <img src={quizImage} />
      </div>
    </div>
  );
};

export default challenges;
