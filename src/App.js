import React, { useState } from "react";
import { cardBox } from "./utils/cardsReferences";
import { shuffle } from "underscore";
import "./App.css";

import { initialState } from "./state/initialState";
import HitButton from "./components/hit-button/HitButton";
import ShuffleCardsButton from "./components/shuffle-button/ShuffleCardsButton";
import StandButton from "./components/stand-button/StandButton";
import ResetButton from "./components/reset-button/ResetButton";
import DetermineWinner from "./components/determine-winner/DetermineWinner";
import Header from "./components/header/Header";

const App = () => {
  const [state, setState] = useState(initialState);

  //create Shuffle - deck
  const shuffleCards = () => {
    const shuffleCards = shuffle(cardBox);

    setState({
      ...state,
      gameCardBox: shuffleCards,
      shuffle: true,
      error: "",
    });
  };

  //Player-hit
  const getCard = () => {
    if (state.shuffle) {
      const card = state.gameCardBox.pop();
      const value = card.substring(0, card.length - 1);
      const currentValue = isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;

      setState({
        ...state,
        sistenCurrentCardValue: currentValue,
        pointsPlayer: (state.pointsPlayer += currentValue),
      });

      if (state.pointsPlayer > 21)
        setState({ ...state, disabled: true, finish: true });
    } else {
      setState({
        ...state,
        error: "You must shuffle the cards",
      });
    }
  };

  //Sistem-hit
  const sistemGetcard = () => {
    do {
      const card = state.gameCardBox.pop();
      const value = card.substring(0, card.length - 1);
      const sistemCurrentValue = isNaN(value)
        ? value === "A"
          ? 11
          : 10
        : value * 1;

      setState({
        ...state,
        currentCardValue: sistemCurrentValue,
        pointsSistem: (state.pointsSistem += sistemCurrentValue),
      });
    } while (
      state.pointsSistem < state.pointsPlayer &&
      state.pointsPlayer <= 21
    );

    if (state.pointsSistem > 21) {
      setState({ ...state, disabled: true, finish: true });
    } else {
      setState({ ...state, disabled: true });
      setTimeout(() => {
        setState({ ...state, finish: true });
      }, 3000);
    }
  };

  return (
    <div>
      <Header />
      {state.finish && (
        <div>
          <DetermineWinner
            sistem={state.pointsSistem}
            player={state.pointsPlayer}
          />
        </div>
      )}

      {!state.finish && (
        <div className="app-container">
          <h5>{state.error}</h5>

          <section className="buttons-start-container">
            <ResetButton disabled={state.disabled} />
            <ShuffleCardsButton
              shuffleCards={shuffleCards}
              disabled={state.disabled}
            />
          </section>

          <section className="points-player-app">
            <div className="points-player-container-text">
              <h4>Player</h4>
              <div className="points-player-container">
                <h1>{state.pointsPlayer}</h1>
              </div>
            </div>

            <div className="points-sistem-container-text">
              <h4>Robotin</h4>
              <div className="points-sistem-container">
                <h1>{state.pointsSistem}</h1>
              </div>
            </div>
          </section>

          <section className="play-buttons-container">
            <HitButton disabled={state.disabled} getCard={getCard} />

            <StandButton
              disabled={state.disabled}
              sistemGetcard={sistemGetcard}
            />
          </section>
        </div>
      )}
    </div>
  );
};

export default App;
