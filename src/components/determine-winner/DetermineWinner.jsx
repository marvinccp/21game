import React from "react";
import Drew from "../draw/Draw";
import WinPlayer from "../win-player/WinPlayer";
import WinSistem from "../win-sistem/WinSistem";
import "./DetermineWinner.css";

const DetermineWinner = ({ sistem, player }) => {
  return (
    <section className="determine-winner-container">
      <section className="points-container">
        <div className="points-player-container">
          <h1>{player}</h1>
        </div>
        <div className="points-sistem-container">
          <h1>{sistem}</h1>
        </div>
      </section>

      {sistem === player && <Drew />}
      {sistem > player && sistem <= 21 && <WinSistem />}
      {player > sistem && player <= 21 && <WinPlayer />}
      {player > 21 && <WinSistem />}
      {sistem > 21 && <WinPlayer />}
    </section>
  );
};

export default DetermineWinner;
