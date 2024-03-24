import heartIcon from '../assets/heartIcon.png' 
import { Link } from 'react-router-dom'

const challenges = () => {
  return (
    <div className="challengesContainer">
      <div className="progressBar">
        <div className="progress">
          <div className="progressText">1/5</div>
        </div>
        <img src={heartIcon}/>
      </div>

      <p>Identifying Common Phishing Techniques</p>
      <h3>
        A suspicious link has landed in your inbox. Is it a harmless URL or a
        phishing trap? Analyze the email carefully and make your decision
      </h3>
    </div>
  );
};

export default challenges;
