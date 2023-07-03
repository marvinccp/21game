import React from 'react'
import ResetButton from '../reset-button/ResetButton'
import './WinPlayer.css'


const WinPlayer = () => {
  return (
    <section className="player-win-container ">
      <div className="player-win-logo-container">
        <img src="./assets/icons/money.png" alt="" />
      </div>
      <h1>Player Win!!</h1>
      <ResetButton />
    </section>
  );
}

export default WinPlayer