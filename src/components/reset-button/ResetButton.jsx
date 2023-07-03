import React from "react";
import "./ResetButton.css";

const ResetButton = ({ disabled }) => {
  console.log(disabled);
  return (
    <section className="reset-button-container">
      <button
        disabled={disabled}
        onClick={() =>
          (window.location = "/")
        }
        className="reset-button"
      >
        New Game
      </button>
    </section>
  );
};

export default ResetButton;
