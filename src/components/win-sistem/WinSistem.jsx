import React from "react";
import ResetButton from "../reset-button/ResetButton";
import './WinSistem.css'
const WinSistem = () => {
  return (
    <section className="win-sistem-container">
      <div className="robot-win-logo-container">
        <img src="./assets/icons/happy.png" alt="" />
      </div>
      <h1>Robotin Win!!</h1>
      <ResetButton />
    </section>
  );
};

export default WinSistem;
