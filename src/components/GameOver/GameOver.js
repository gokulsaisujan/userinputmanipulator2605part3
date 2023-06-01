import React from "react";
import "./GameOver.css";

const GameOver = ({ onStopRecording, onDownloadVideo, handledownloadclick}) => {
  return (
    <div className="container gameOver">
      <h3>Game over. Thank you!</h3>
      <h4>Please refresh to restart the game.</h4>
      <br />
//       <button onClick={onStopRecording}>Stop Recording</button>
      <button onClick={onDownloadVideo}>Download Video</button>
      <button onClick={handledownloadclick}>Download Logged Data</button>
      <p>
      Upload your video:{" "}
        <a href="https://drive.google.com/drive/u/1/folders/1VX9madykrgWgLoa39DQ3poamPAIcNzWh">
          Click here
        </a>
      </p>
    </div>
  );
};

export default GameOver;






