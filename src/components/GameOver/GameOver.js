import React from "react";
import "./GameOver.css";


const GameOver = ({ onStopRecording, onDownloadVideo, ondownloadloggeddata, handlestopexperiment}) => {
  return (
    <div className="container gameOver">
      <h3>Game over. Thank you! Make sure to download the files before refreshing and upload them</h3>
      {/* <h4>Please refresh to restart the game.</h4> */}
      <br />
      {/* <button onClick={onStopRecording}>Stop Recording</button> */}
      <button onClick={onDownloadVideo}>Download Video</button>
      <button onClick={ondownloadloggeddata}>Download Excel file</button>
      {/* <button onClick={handlestopexperiment}>Stop Experiment</button> */}
      <p>
      Upload your video and excel file:{" "}
        <a href="https://forms.gle/mJzdsbWh4zm1LtxEA">
          Click here
        </a>
      </p>
    </div>
  );
};

export default GameOver;






