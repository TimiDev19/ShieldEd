import heartIcon from '../assets/heartIcon.png' 
import '../styles/challenges.css'

const challenges = () => {
  return (
    <div className="challengesContainer">
      <div className="challengesBar">
        <div className="challengesProg">
          <div className="barText">1/5</div>
        </div>
        <img src={heartIcon}/>
      </div>

      <h3>Identifying Common Phishing Techniques</h3>
      <p className='text2'>
        A suspicious link has landed in your inbox. Is it a harmless URL or a
        phishing trap? <br/> Analyze the email carefully and make your decision
      </p>
    </div>
  );
};

export default challenges;
