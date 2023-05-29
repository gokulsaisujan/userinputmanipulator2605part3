import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import NavigationBar from "./components/Navbar/NavigationBar";
import "./App.css";
import InputText from "./components/InputText/InputText";
import UmContext from "./components/Context/UmContext";
import GameOver from "./components/GameOver/GameOver";
import { ReactMediaRecorder, useReactMediaRecorder } from "react-media-recorder";

// import { SpreadsheetApp } from 'google-apps-script';

// import {useState, useRef} from "react";
// import React, { useState } from "react";
import { Row, Col, Button, Badge } from "antd";
// import { useReactMediaRecorder } from "react-media-recorder";

import Text from "antd/lib/typography/Text";
// import TextInputLogger from './Textinputlogger';




  
    




function App() {
  const [currentTaskNumber, setCurrentTaskNumber] = useState(1);
  const [totalTasks, setTotalTasks] = useState(7);
  const [currentGivenText, setCurrentGivenText] = useState("");
  const [userInputText, setUserInputText] = useState("");
  const [userStartedInput, setUserStartedInput] = useState(false);
  const [isTaskComplete, setIsTaskComplete] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [currentManipulateAttempt, setCurrentManipulateAttempt] = useState(0);
  const [textToDisplay, setTextToDisplay] = useState(
    "Please start typing in the input box below ..."
  );
  

  const [roll, setroll] = useState('')


  
  
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video:true, screen: false});
  // const { statusvideo, startRecordingvideo, stopRecordingvideo, mediaBlobUrlvideo } =
  //   useReactMediaRecorder({ screen: true, video: false });
  // downloadRecordingPath="D:\Screen_Recording_Demo"
  // downloadRecordingType="mp4"

  function downloadscreenVideoFromBlobUrl() {
    const link = document.createElement('a');
    link.href = mediaBlobUrl;
    link.download = roll.concat('.mp4');
    link.click();
  }



  // function downloadVideoFromBlobUrl() {
  //   const link = document.createElement('a');
  //   link.href = mediaBlobUrlvideo;
  //   link.download = 'video.mp4';
  //   link.click();
  // }

  // const stopRecordButton = document.getElementById('stopRecording');

  // stopRecordButton.addEventListener('click', downloadVideoFromBlobUrl);

    
  
  // export default ScreenRecording;

  // const { statusscreen, startscreenRecording, stopscreenRecording, mediaBlobUrlscreen } =
  //   useReactMediaRecorder({screen: true });
  
  // const [message, setMessage] = useState("");
  
  // useEffect (()=>console.log('jjj', status), [])

  
  // if (status != 'recording') {
  //   return <></>
  // }



  // useEffect(() => {
  //   fetch("http://localhost:8000/login")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);


  // function logLetterToGoogleSheet(letter) {
  //   // Get the current time.
  //   const now = new Date();
  
  //   // Create a new row in the Google Sheet.
  //   const sheet = SpreadsheetApp.openById("1_16jWxdDHOTabblaJhfyVkfsPD_Y8OG-ujlNk0H_jG8/edit?usp=sharing");
  //   const row = sheet.getRange("A1").offset(1, 0).getValues();
  
  
  //   // Add the current time and the letter to the row.
  //   row.push(now, letter);
  
  //   // Save the row.
  //   sheet.getRange("A1").setValues(row);
  // }

  // const input = document.getElementById("input");
  // input.addEventListener("keyup", logLetterToGoogleSheet);

  return (

    <UmContext.Provider
      value={{
        currentTaskNumber,
        setCurrentTaskNumber,
        totalTasks,
        setTotalTasks,
        currentGivenText,
        setCurrentGivenText,
        userInputText,
        setUserInputText,
        userStartedInput,
        setUserStartedInput,
        isTaskComplete,
        setIsTaskComplete,
        isGameOver,
        setIsGameOver,
        textToDisplay,
        setTextToDisplay,
        currentManipulateAttempt,
        setCurrentManipulateAttempt,
      }}
    >
      {/* {/* <div>
      {/* Other components and content */}
      {/* <TextInputLogger /> */}
    {/* </div> */}
        <div>
          <p>{status}</p> 
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <button onClick={downloadscreenVideoFromBlobUrl}>Download video</button>
          <button onClick={handleDownloadClick}>Download Logged Data</button>
          {/* <video src={mediaBlobUrl} autoplay loop controls></video> */}
          </div>
          {/* <div>
          <p>{statusvideo}</p>
          <button onClick={startRecordingvideo}>Start Recording</button>
          <button onClick={stopRecordingvideo}>Stop Recording</button>
          <button onClick={downloadVideoFromBlobUrl}>Download</button>
          {/* <video src={mediaBlobUrlvideo} autoplay loop controls></video> */}
          {/* </div> */}

          {/* <div>
          <button onClick={handleDownloadClick}>Download Logged Data</button>
          </div> */}

        <div>
        <label htmlFor={'my-input'}>Enter text: </label>
        <input
          id={'my-input'}
          type={'text'}
          value={roll}
          placeholder={'Type here'}
          onChange={event => {
            setroll(event.target.value)
        }}
      />
        </div>

      <div className="App">
        <header className="App-header">
          <NavigationBar />
          {!isGameOver && <InputText />}
          {isGameOver && <GameOver />}
        </header>
      </div>
    </UmContext.Provider>
  );
}

export default App;
