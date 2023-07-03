import React from 'react'
import './StandButton.css'


const StandButton = ({ sistemGetcard, disabled}) => {
  return (
    <section className="stand-button-container">
      <button disabled={disabled} onClick={sistemGetcard} className="stand-button">
        Stand
      </button>
    </section>
  );
}

export default StandButton