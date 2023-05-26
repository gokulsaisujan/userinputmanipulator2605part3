import React from "react";
import "./GameOver.css";

function GameOver() {
  return (
    <>
      <div className="container gameOver">
        <h3>Game over. Thank you!</h3>
        <br />
        <h4>Please refresh to restart the game.</h4>
      </div>
    </>
  );
}

export default GameOver;
