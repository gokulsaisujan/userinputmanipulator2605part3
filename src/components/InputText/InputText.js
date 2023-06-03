import React, { useContext, useEffect, useState, useRef } from "react";
import UmContext from "../Context/UmContext";
import LeftBlock from "../LeftBlock/LeftBlock";
import RightBlock from "../RightBlock/RightBlock";
import "./InputText.css";
// import { GoogleSpreadsheet } from 'google-spreadsheet';
import InstructionsModal from "../InstructionsModal";
import { agreed } from "../InstructionsModal";


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
  const [manipulateNow, setManipulateNow] = useState(false);
  const [isStartedReplace, setIsStartedReplace] = useState(false);
  const [ivariable, setivariable] = useState()
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTaskSubmitButtonDisabled(!userStartedInput);
  }, [userStartedInput]);
  // console.log(currentTaskNumber, manipulateNow);


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
    }, 8000);
    console.log("===============================")
    console.log(currentTaskNumber)
    console.log("===============================")
    return () => clearTimeout(interval);
  }, [currentTaskNumber]);


  
  // useEffect(() => {setManipulateNow(true);}
  // , [currentTaskNumber]);
  // console.log(manipulateNow)


  // const repeatedmanipulation = () => {
  //   if (ivariable <=5) {
  //       setivariable( ivariable+1)
  //       setInterval(() => {setManipulateNow((prevState) => !prevState); }, 6000);
  //       console.log('value of i', ivariable, manipulateNow)
  //       }
  //     else
  //     {setManipulateNow(false)}

  // }


//   function repeatedmanipulation(callback, delay, repetitions) {
//     var x = 0;
//     var intervalID = window.setInterval(function () {
//        callback();

//        if (++x === repetitions) {
//            window.clearInterval(intervalID);
//        }
//     }, delay);
// }

// repeatedmanipulation(setManipulateNow((prevState) => !prevState), 3000, 2 )

// useEffect(() => {
//   // Set manipulateNow to true at the beginning of each task
//   setManipulateNow(true);

//   const intervalID = setInterval(() => {
//     setManipulateNow((prevValue) => !prevValue);
//   }, 3000);
//   console.log('Hi there hello', manipulateNow)

//   // Clean up the interval on component unmount or task completion
//   return () => clearInterval(intervalID);
// }, [currentTaskNumber]);


// useEffect(() => {
//   // Set manipulateNow to true at the beginning of each task
//   setManipulateNow(true);

//   const intervalID = setInterval(() => {
//     setManipulateNow((prevValue) => {
//       // Check if the counter has reached the limit of 3
//       if (counter >= 3) {
//         clearInterval(intervalID); // Stop the interval
//         return prevValue; // Keep the current value
//       }

//       // Increment the counter
//       setCounter((prevCounter) => prevCounter + 1);

//       // Toggle the value of manipulateNow
//       return !prevValue;
//     });
//   }, 3000);

//   // Clean up the interval on component unmount or task completion
//   return () => clearInterval(intervalID);
// }, [currentTaskNumber, counter]);

console.log('manipulate now', manipulateNow)
// useEffect (()=>{setManipulateNow(true)} ,[currentTaskNumber])



// function secondfunction () {
  
//   setTimeout(thirdfunction,3000)
// }

// function thirdfunction () {
//   setManipulateNow(false)
// }

// setTimeout(function firstfunction() {
//   setManipulateNow(false);
//   setTimeout(function secondfunction() {
//     setManipulateNow(true);
//   }, 3000);
// }, 7000);




// setTimeout(firstfunction, 7000)

  // const [manipulatenow, setManipulatenow] = useState(false);
  // const [taskComplete, setTaskComplete] = useState(false);
  // const [cycles, setCycles] = useState(0);

  // useEffect(() => {
  //   if (!isTaskComplete && cycles < 3) {
  //     const timeoutId = setTimeout(() => {
  //       setManipulateNow(true);

  //       const timeoutId2 = setTimeout(() => {
  //         setManipulateNow(false);
  //         setCycles(cycles + 1);
  //       }, 3000);

  //       // Cleanup function
  //       return () => clearTimeout(timeoutId2);
  //     }, cycles === 0 ? 0 : 3000);

  //     // Cleanup function
  //     return () => clearTimeout(timeoutId);
  //   }
  // }, [isTaskComplete, cycles, currentTaskNumber]);


  

  // const [manipulatenow, setManipulatenow] = useState(false);
  // const [taskComplete, setTaskComplete] = useState(false);
  // const [cycles, setCycles] = useState(0);
  // const [currentTask, setCurrentTask] = useState(1); 

  // First effect: Set 'manipulatenow' to true, wait 3 seconds, then set to false
  // useEffect(() => {
  //   if (!isTaskComplete && cycles < 3) {
  //     setManipulateNow(true);

  //     const timeoutId = setTimeout(() => {
  //       setManipulateNow(false);
  //       setCycles(prevCycles => prevCycles + 1);
  //     }, 3000);

  //     return () => clearTimeout(timeoutId);
  //   }
  // }, [isTaskComplete, cycles, currentTaskNumber]);

  // // Second effect: If 'manipulatenow' is false and we have not done 3 cycles yet, set it to true
  // useEffect(() => {
  //   if (!manipulateNow&& !isTaskComplete && cycles < 3) {
  //     const timeoutId = setTimeout(() => {
  //       setManipulateNow(true);
  //     }, 3000);

  //     return () => clearTimeout(timeoutId);
  //   }
  // }, [manipulateNow, isTaskComplete, cycles]);

  // Some code here to handle task completion and call setTaskComplete(true) when task is completed
  // Some code here to handle changing tasks and call setCurrentTask with the new task number

  


  


  








// function useRepeatedManipulation(callback, delay, repetitions) {
//   const intervalID = useRef(null);
//   const count = useRef(0);

//   useEffect(() => {
//     intervalID.current = setInterval(() => {
//       callback();
//       console.log(count.current, 'count', manipulateNow)

//       count.current++;

//       if (count.current === repetitions) {
//         clearInterval(intervalID.current);
//       }
//     }, delay);

//     return () => {
//       clearInterval(intervalID.current);
//     };
//   }, [callback, delay, repetitions]);
// }

// Usage within a React component

  // useRepeatedManipulation(() => {
  //   setManipulateNow((prevState) => !prevState);
  // }, 3000, 2);



  




  
  
    // if (ivariable <=5) {
    //   setivariable( ivariable+1)
    //   setInterval(() => {setManipulateNow((prevState) => !prevState); }, 6000);
    //   console.log('value of i', ivariable, manipulateNow)
    //   }
    // else
    // {setManipulateNow(false)}

    // useEffect(()=>{setivariable(0);},[currentTaskNumber])
  
  
 
  // setInterval(() => {setManipulateNow((prevState) => !prevState);
  // }, 4000);
  // const interval = setTimeout(() => {
  //   setManipulateNow((prevState) => !prevState);
  // }, 5000);
  

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

let currentUserInput = userInputText.toString();
let currentUserInputLength = currentUserInput.length;
let currentLastLetter = currentUserInput[currentUserInputLength - 1];

useEffect(() => {
  const handleBeforeUnload = () => {
    localStorage.clear();
  };

  window.addEventListener('beforeunload', handleBeforeUnload);

  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
}, []);



const logDataToLocalStorage = () => {
  const timestamp = new Date().toISOString();
  const loggedData = { timestamp, userInputText, currentLastLetter, manipulateNow, currentTaskNumber};

  // Retrieve existing logged data from local storage
  const existingData = JSON.parse(localStorage.getItem('loggedData') || '[]');

  // Add the new data to the existing logged data
  const updatedData = [...existingData, loggedData];

  // Save the updated data to local storage
  localStorage.setItem('loggedData', JSON.stringify(updatedData));

  // console.log('Data logged to local storage!');
};

useEffect(()=>{logDataToLocalStorage()},[userInputText]);

// if (currentTaskNumber == 9){
//   if (currentGivenText == userInputText){
//   handleDownloadClick();
//     }
//    }
  



  


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

      
      if(currentUserInputLength == 6){
    setUserInputText(userInputText.slice(0,-4))}
      else {
        setUserInputText(userInputText)
      }

    }
    else if (currentTaskNumber == 3){
      if (currentLastLetter == 'e') {
        let i = 0
        if (i < 1) {
        setUserInputText('A picture' + 'eeeeeeee')
        }
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
     else if ((currentTaskNumber == 5 && !triedGarbageAddition && currentManipulateAttempt <= 3) ||(currentTaskNumber == 9 && currentManipulateAttempt <= 6)) {
      const manipulatedText = addGarbageString(currentUserInput);
      setUserInputText(manipulatedText);
      // function manipulatetruer() {
      //   setManipulateNow(true)
      // }
      function garbagefalser(){
        setTriedGarbageAddition(false)
        // setTimeout(manipulatetruer,3000)
        
      }
      setTriedGarbageAddition(true);
      console.log('Triedgarbageaddition',triedGarbageAddition)
      setTimeout(garbagefalser, 3000);
      setCurrentManipulateAttempt(currentManipulateAttempt + 1);
      // console.log(currentManipulateAttempt);
      // setManipulateNow(false);
      return;
    } else if(currentTaskNumber==6){
      if (currentUserInputLength == 12){
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
    
    else if (currentTaskNumber == 7 && !triedAdjAdd && currentUserInputLength > 3) {
      const randomInt = Math.floor(Math.random() * 3) + 1;
      const manipulatedText =
        replaceWithPreviousOrNextOrAdjacentLettersOnKeyboard(
          currentUserInput,
          currentLastLetter,
          randomInt
        );
      setUserInputText(manipulatedText);
      setTriedAdjAdd(true);
      function triedadjfalser(){
        setTriedAdjAdd(false)
      }
      setTimeout(triedadjfalser, 2000);
      setCurrentManipulateAttempt(currentManipulateAttempt + 1);
      // // setManipulateNow(false);
      // return;
    } 
    else {
      if (currentUserInputLength == 10) {
      const manipulatedText = eraseHalfInputAndReturn(currentUserInput)
      setUserInputText(manipulatedText);
      }
    }
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
                  {/* <button
                    className="btn-secondary"
                    id="skipbtn"
                    onClick={handleSkip}
                  >
                    Skip
                  </button> */}

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
                  <li>At any point, do not refresh as you progres will be lost</li>
                  <li>Once you're done, download the video</li>
                  <li>Type exactly what you see on your left screen.</li>
                  <li>Make sure to look at the screen at all times.</li>
                  <li> Do not turn your head away from the screen.</li>
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
