import React, { useState } from 'react';
import '../styles/Popup.css'; // Importing CSS for styling

function PopupExample({ cards }) {
    const [isOpen, setIsOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const goToNextCard = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

  const goToPreviousCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  return (
    <div>
      <button onClick={togglePopup} className='popupTrigger'>Learning Cards</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>{cards[currentCard].header}</h2>
            <p>{cards[currentCard].paragraph}</p>
            <img src={cards[currentCard].image} className='popupimage'/>
            <div className="popup-buttons">
              <button onClick={goToPreviousCard} disabled={currentCard === 0}>Previous</button>
              <button onClick={goToNextCard} disabled={currentCard === cards.length - 1}>Next</button>
              <button onClick={togglePopup}>Close Popup</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupExample;
