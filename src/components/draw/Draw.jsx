import React from 'react'
import ResetButton from '../reset-button/ResetButton'
import './Draw.css'


const Drew = () => {
  return (
    <section className="draw-container ">
      <div className="draw-logo-container">
        <img src="./assets/icons/draw.png" alt="" />
      </div>
      <h1>Draw</h1>
      <ResetButton />
    </section>
  );
}

export default Drew