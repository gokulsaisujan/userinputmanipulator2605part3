import React from "react";
import "./GameOver.css";


const GameOver = ({ onStopRecording, onDownloadVideo, ondownloadloggeddata, handlestopexperiment}) => {
  return (
    <div className="container gameOver">
      <h3>Game over. Thank you!</h3>
      <h4>Please refresh to restart the game.</h4>
      <br />
      {/* <button onClick={onStopRecording}>Stop Recording</button> */}
      <button onClick={onDownloadVideo}>Download Video</button>
      <button onClick={ondownloadloggeddata}>Download Excel file</button>
      {/* <button onClick={handlestopexperiment}>Stop Experiment</button> */}
      <p>
      Upload your video and excel file:{" "}
        <a href="https://drive.google.com/drive/u/1/folders/1VX9madykrgWgLoa39DQ3poamPAIcNzWh">
          Click here
        </a>
      </p>
    </div>
  );
};

export default GameOver;






