import React, { useContext, useEffect, useState } from "react";
import UmContext from "../Context/UmContext";
import LeftBlock from "../LeftBlock/LeftBlock";
import RightBlock from "../RightBlock/RightBlock";
import "./InputText.css";
// import { GoogleSpreadsheet } from 'google-spreadsheet';



function InputText() {
  const { currentTaskNumber, setCurrentTaskNumber } = useContext(UmContext);
  const { currentGivenText, setCurrentGivenText } = useContext(UmContext);
  const { userInputText, setUserInputText } = useContext(UmContext);
  const { totalTasks, setTotalTasks } = useContext(UmContext);
  const { userStartedInput, setUserStartedInput } = useContext(UmContext);
  const { isTaskComplete, setIsTaskComplete } = useContext(UmContext);
  const { isGameOver, setIsGameOver } = useContext(UmContext);
  const { textToDisplay, setTextToDisplay } = useContext(UmContext);
  const { currentManipulateAttempt, setCurrentManipulateAttempt } =
    useContext(UmContext);

  const [
    replaceWithPreviousOrNextOrAdjacentLettersOnKeyboardAttempt,
    setReplaceWithPreviousOrNextOrAdjacentLettersOnKeyboardAttempt,
  ] = useState(0);
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [result, setResult] = useState("");
  const [taskSubmitButtonDisabled, setTaskSubmitButtonDisabled] = useState(
    !userStartedInput
  );
  const [halfEraseDone, setHalfEraseDone] = useState(false);
  const [triedGarbageAddition, setTriedGarbageAddition] = useState(false);
  const [triedAdjAdd, setTriedAdjAdd] = useState(false);
  const [manipulateNow, setManipulateNow] = useState(true);
  const [isStartedReplace, setIsStartedReplace] = useState(false);

  useEffect(() => {
    setTaskSubmitButtonDisabled(!userStartedInput);
  }, [userStartedInput]);
  console.log(currentTaskNumber, manipulateNow);


  // useEffect(() => {
  //     if (userStartedInput) {
  //     manipulateText();}
  //     setTextToDisplay(userInputText)
  //   }
  // , [userInputText]);

  // const eletterescape = (currentUserInput, currentLastLetter) => {
  //   if (currentLastLetter === 'e') {
  //     setCurrentTaskNumber(currentTaskNumber + 1);
  //     setIsTaskComplete(false);
  //     setUserInputText("");
  //     setResult("");
  //     setUserStartedInput(false);
  //     setShowSubmitButton(true);
  //     setTriedGarbageAddition(false);
  //     setHalfEraseDone(false);
  //     setIsStartedReplace(false);
  //   }
  //   // return currentUserInput.slice(0,-1)
  // };



  useEffect(() => {
    // console.log(currentManipulateAttempt);
    // console.log(currentManipulateAttempt < 4);
    // console.log(userStartedInput);
    // console.log(currentManipulateAttempt < 4 && userStartedInput);
    if (manipulateNow && userStartedInput) {
      manipulateText();
      setTextToDisplay(userInputText);
    }
  }, [userInputText]);

  useEffect(() => {
    // let randomDuration = Math.floor(Math.random() * 6) + 4; // between 5 to 10 seconds
    // if (halfEraseDone) {
    //   const interval = setInterval(() => {
    //     setManipulateNow((prevState) => !prevState);
    //   }, 2000);
    //   return () => clearInterval(interval);
    // }
    console.log("Hi");
    const interval = setTimeout(() => {
      setManipulateNow((prevState) => !prevState);
    }, 5000);
    console.log("===============================")
    console.log(currentTaskNumber)
    console.log("===============================")
    return () => clearTimeout(interval);
  }, [currentTaskNumber]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsStartedReplace((prevState) => !prevState);
  //   }, 20000);

  //   return () => clearInterval(interval);
  // }, [isStartedReplace]);

  const handleSubmitCheck = (e) => {
    const currentUserInput = userInputText;
    // console.log(currentUserInput);
    const isUserRight = currentGivenText == userInputText;
    // console.log("isUserRight: ", isUserRight);
    if (isUserRight) {
      setResult("That's correct!");
      setIsTaskComplete(true);
      setShowSubmitButton(false);
      setTriedGarbageAddition(false);
      setHalfEraseDone(false);
      setIsStartedReplace(false);
    } else {
      setResult("Wrong input! Please retry.");
    }
  };

  const handleNext = (e) => {
    if (currentTaskNumber == totalTasks) {
      setIsGameOver(true);
    }

    const currentTask = currentTaskNumber;
    setCurrentTaskNumber(currentTask + 1);
    setIsTaskComplete(false);
    setUserInputText("");
    setResult("");
    setUserStartedInput(false);
    setShowSubmitButton(true);
    setTriedGarbageAddition(false);
    setHalfEraseDone(false);
    setIsStartedReplace(false);
    setManipulateNow(true);
  };

  const handleSkip = (e) => {
    if (currentTaskNumber == totalTasks) {
      setIsGameOver(true);
    }
    const currentTask = currentTaskNumber;
    setCurrentTaskNumber(currentTask + 1);
    setUserInputText("");
    setResult("");
    setUserStartedInput(false);
    setTriedGarbageAddition(false);
    setHalfEraseDone(false);
    setIsStartedReplace(false);
    setManipulateNow(true);
  };




// const logToGoogleSheet = async (input) => {
//   const timestamp = new Date().toISOString(); // Generate timestamp

//   try {
//     const doc = new GoogleSpreadsheet('1_16jWxdDHOTabblaJhfyVkfsPD_Y8OG-ujlNk0H_jG8/edit?usp=sharing');
//     const credentials = require('./credentials.json');

//     // Authenticate with Google Sheets API
//     await doc.useServiceAccountAuth(credentials);
//     await doc.loadInfo();

//     const sheet = doc.sheetsByIndex[0]; // Assuming the log sheet is the first sheet
//     await sheet.addRow({ Timestamp: timestamp, Input: input });

//     console.log('Log data sent successfully!');
//   } catch (error) {
//     console.error('Error sending log data:', error);
//   }
// };

// useEffect(()=>{logToGoogleSheet(userInputText)},[userInputText]);




const logDataToLocalStorage = () => {
  const timestamp = new Date().toISOString();
  const loggedData = { timestamp, userInputText };

  // Retrieve existing logged data from local storage
  const existingData = JSON.parse(localStorage.getItem('loggedData') || '[]');

  // Add the new data to the existing logged data
  const updatedData = [...existingData, loggedData];

  // Save the updated data to local storage
  localStorage.setItem('loggedData', JSON.stringify(updatedData));

  console.log('Data logged to local storage!');
};

useEffect(()=>{logDataToLocalStorage()},[userInputText]);







  


  const manipulateText = () => {
    let currentUserInput = userInputText.toString();
    let currentUserInputLength = currentUserInput.length;
    
    let currentWhitespaces = currentUserInput.split(" ").length - 1;
    let currentLastLetter = currentUserInput[currentUserInputLength - 1];

    let currentManipulationAttempt = currentManipulateAttempt;

    // console.log(currentUserInput);
    // console.log(currentLastLetter);
    // console.log(currentWhitespaces);
    // console.log(currentUserInputLength);

    // console.log(currentUserInputLength >= 15 && !halfEraseDone);
    // console.log(currentUserInputLength >= 15);
    // console.log(!halfEraseDone);
    

    // if (
    //   currentUserInputLength >= 15 &&
    //   !halfEraseDone &&
    //   currentManipulateAttempt >= 1
    // ) 
    if (currentTaskNumber == 1){
      setUserInputText(userInputText)
    }
    else if (currentTaskNumber == 2){
      if(currentUserInputLength == 4){
    setUserInputText(userInputText.slice(0,-3))}
      else{
        setUserInputText(userInputText)
      }

    }
    else if (currentTaskNumber == 3){
      if (currentLastLetter == 'e') {
        setUserInputText('Task failed')
      }  
    }

    else if (currentTaskNumber == 4){
      setUserInputText('             ')
    }

    

      // const manipulatedText = eraseHalfInputAndReturn(currentUserInput);
      // setUserInputText(manipulatedText);
      // setHalfEraseDone(true);
      // setCurrentManipulateAttempt(currentManipulateAttempt + 1);
      // setManipulateNow(false);
      // return;
     else if ((currentTaskNumber == 5 && !triedGarbageAddition) ||(currentTaskNumber == 9 && !triedGarbageAddition)) {
      const manipulatedText = addGarbageString(currentUserInput);
      setUserInputText(manipulatedText);
      setTriedGarbageAddition(true);
      setCurrentManipulateAttempt(currentManipulateAttempt + 1);
      // console.log(currentManipulateAttempt);
      // setManipulateNow(false);
      return;
    } else if(currentTaskNumber==6){
      if (currentUserInputLength == 19){
        handleSkip();
      // setManipulateNow(true);
      // // setIsTaskComplete(false);
      // setUserInputText("");
      // setResult("");
      // setUserStartedInput(false);
      // // setShowSubmitButton(true);
      // setTriedGarbageAddition(false);
      // // setHalfEraseDone(false);
      // setIsStartedReplace(false);
      // const currentTask = currentTaskNumber;
      // setCurrentTaskNumber(currentTask + 1);
    }


    }
    
    else if (currentTaskNumber == 7 && !triedAdjAdd) {
      const randomInt = Math.floor(Math.random() * 3) + 1;
      const manipulatedText =
        replaceWithPreviousOrNextOrAdjacentLettersOnKeyboard(
          currentUserInput,
          currentLastLetter,
          randomInt
        );
      setUserInputText(manipulatedText);
      setTriedAdjAdd(true);
      setCurrentManipulateAttempt(currentManipulateAttempt + 1);
      // // setManipulateNow(false);
      // return;
    } 
    else {}
  };
  
  const addGarbageString = (currentUserInput) => {
    // console.log("----> Inside addGarbageString()");
    const garbageTextArray = [
      "gddsgrgd",
      "gdkjfsjgr",
      "iufheriufhre",
      "jtthgresfser",
      "fdge fregerf",
      "ret ewer tre",
      "!@$#%$$@##$",
      "*(&^^%$",
      "d4eR#$%#$%",
      "2%#$34 34$#$53",
      "f#$T$#Rest",
      "SAFW434R4",
      "SADFW#@$%$",
      " d  R",
      "23a43f245",
      "dG#hJ7^k",
      "l&*Fp9$q",
      "eR5@tZ%w",
      "qY2^rX$7",
      "tU9*lN#5",
      "iO@hL8^p",
      "aM#fB6%s",
      "uK3^gV$4",
      "mC7&jP5$q",
      "bN1@rT6%w",
      "oQ4^sZ#9",
      "xW8*kF3$s",
      "pS5%lH9@u",
      "yD7#kG2^i",
      "wE2$rJ6*o",
      "fV9%sA8^t",
      "nL6$gB4@x",
      "cI3^hU1#y",
      "sX4*wR9$z",
      "zQ2%tM7^v",
      "jF5$kP8#b",
      "rT1@oD3*s",
      "gH6^eN9%u",
      "vY8&lK2$q",
      "kW7#sZ4^x",
      "eU5$gB1@n",
      "tO9%hL6^p",
      "iJ2^fV8$w",
      "aG6*xD4#y",
      "uP3$qS9%s",
      "mN1@bC5^t",
      "bR4%tQ6*w",
      "oZ7^sE2$k",
      "xK5*hT9#u",
      "pA8$rI3&l",
      "yF6#jV2^g",
      "wM3%sD1$y",
      "fN9^gH7@z",
      "nT4*kU5#x",
      "cS2$yW8%q",
      "sX6^zQ1&i",
    ];

    const randomIndex = Math.floor(Math.random() * garbageTextArray.length);
    return currentUserInput + garbageTextArray[randomIndex];
  };

  const replaceWithPreviousOrNextOrAdjacentLettersOnKeyboard = (
    currentUserInput,
    currentLastLetter,
    previousOrNextOrAdjacent
  ) => {
    // console.log(
    //   "----> Inside replaceWithPreviousOrNextOrAdjacentLettersOnKeyboard()"
    // );
    const keyMap = {
      q: { prev: "p", next: "w" },
      w: { prev: "q", next: "e" },
      e: { prev: "w", next: "r" },
      r: { prev: "e", next: "t" },
      t: { prev: "r", next: "y" },
      y: { prev: "t", next: "u" },
      u: { prev: "y", next: "i" },
      i: { prev: "u", next: "o" },
      o: { prev: "i", next: "p" },
      p: { prev: "o", next: "a" },
      a: { prev: "p", next: "s" },
      s: { prev: "a", next: "d" },
      d: { prev: "s", next: "f" },
      f: { prev: "d", next: "g" },
      g: { prev: "f", next: "h" },
      h: { prev: "g", next: "j" },
      j: { prev: "h", next: "k" },
      k: { prev: "j", next: "l" },
      l: { prev: "k", next: "z" },
      z: { prev: "l", next: "x" },
      x: { prev: "z", next: "c" },
      c: { prev: "x", next: "v" },
      v: { prev: "c", next: "b" },
      b: { prev: "v", next: "n" },
      n: { prev: "b", next: "m" },
      m: { prev: "n", next: "" }, // There's no key after 'm'
    };
    try {
      const prevKey = keyMap[currentLastLetter]["prev"];
      const nextKey = keyMap[currentLastLetter]["next"];
      const currentReplacementAttempt =
        replaceWithPreviousOrNextOrAdjacentLettersOnKeyboardAttempt;
      setReplaceWithPreviousOrNextOrAdjacentLettersOnKeyboardAttempt(
        currentReplacementAttempt - 1
      );
      if (previousOrNextOrAdjacent == 1) {
        setIsStartedReplace(true);
        return currentUserInput.slice(0, -1) + prevKey;
      }
      if (previousOrNextOrAdjacent == 2) {
        setIsStartedReplace(true);
        return currentUserInput.slice(0, -1) + nextKey;
      }
      setIsStartedReplace(true);
      return (
        currentUserInput.slice(0, -1) + prevKey + currentLastLetter + nextKey
      );
    } catch (error) {
      return currentUserInput;
    }
  };

  const eraseHalfInputAndReturn = (currentUserInput) => {
    // console.log("----> Inside eraseHalfInputAndReturn()");
    return currentUserInput.slice(0, currentUserInput.length / 2);
  };

  return (
    <>
      <div id="outerBlock">
        <div className="container-fluid">
          <div className="row" id="TaskInstructionsTab">
            <div className="col-md-11" id="taskNumberPanel">
              Task {currentTaskNumber}/{totalTasks}{" "}
            </div>
            <div className="col-md-1" id="instructionsPanel">
              <button
                type="button"
                id="instructions-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Instructions
              </button>
            </div>
          </div>
          <div className="row" id="innerBlock">
            <LeftBlock />
            <RightBlock />
          </div>

          <div className="row" id="endRow">
            {isTaskComplete && (
              <div
                className="col-md-8"
                id="resultsBlock"
                style={{ color: "green" }}
              >
                {result}
              </div>
            )}
            {!isTaskComplete && (
              <div
                className="col-md-8"
                id="resultsBlock"
                style={{ color: "red" }}
              >
                {result}
              </div>
            )}
            <div className="col-md-4" id="submitBtnBlock">
              {!isTaskComplete && (
                <>
                  <button
                    className="btn-secondary"
                    id="skipbtn"
                    onClick={handleSkip}
                  >
                    Skip
                  </button>

                  <button
                    className="btn-secondary"
                    id="submitbtn"
                    disabled={taskSubmitButtonDisabled}
                    onClick={handleSubmitCheck}
                  >
                    Submit
                  </button>
                </>
              )}
              {isTaskComplete && (
                <button
                  className="btn-secondary"
                  id="nextbtn"
                  onClick={handleNext}
                >
                  Next &gt;
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  User Instructions
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <ol>
                  WELCOME TO TYPING SIMULATOR!
                  <br />
                  Please find the instructions below:
                  <li>Type exactly what you see on your left screen.</li>
                  <li>Make sure to look at the screen at all times.</li>
                  <li> Do not turn your head away from the screen.</li>
                  <li>
                    Once you press the 'Ok' button you have entered the
                    simulator.
                  </li>
                </ol>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputText;
