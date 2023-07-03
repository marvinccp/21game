import React from "react";
import './HitButton.css'



const PlayerButton = ({ getCard, disabled }) => {
    console.log(disabled);
  return (
    <section className="hit-button-container">
      <button disabled={disabled}  className="hit-button" onClick={getCard}>Hit</button>
    </section>
  );
};

export default PlayerButton;
