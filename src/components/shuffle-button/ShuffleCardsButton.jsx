    import React from 'react'
    import './ShuffleCardsButton.css'


    const ShuffleCardsButton = ({ shuffleCards , disabled}) => {
      return (
        <section className="shuffle-button-container">
          <button disabled={disabled} onClick={shuffleCards} className="shuffle-button">
            Shuffle
          </button>
        </section>
      );
    };
    
    export default ShuffleCardsButton