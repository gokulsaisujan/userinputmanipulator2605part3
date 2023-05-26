import React, { useContext, useEffect, useRef, useState } from "react";
import UmContext from "../Context/UmContext";
import "./RightBlock.css";

function RightBlock() {
  const { currentTaskNumber, setCurrentTaskNumber } = useContext(UmContext);
  const { userInputText, setUserInputText } = useContext(UmContext);
  const { userStartedInput, setUserStartedInput } = useContext(UmContext);
  const { textToDisplay, setTextToDisplay } = useContext(UmContext);
  const { isTaskComplete, setIsTaskComplete } = useContext(UmContext);

  useEffect(() => {
    setTextToDisplay("Please start typing in the input box below ...");
    setUserInputText("");
  }, [currentTaskNumber]);

  const setTextAsInput = (e) => {
    setUserStartedInput(true);
    setTextToDisplay(e.target.value);
    setUserInputText(e.target.value);
  };

  const textInput = useRef(null);

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <>
      <div className="col-md-7" id="rightBlock">
        <h4 id="yourInputHeader">Your input:</h4>
        {!userStartedInput && (
          <>
            <div
              id="userInputBlock"
              style={{ color: "lightgray", fontStyle: "italic" }}
              onClick={handleClick}
            >
              {textToDisplay}{" "}
            </div>
          </>
        )}
        {userStartedInput && (
          <>
            <div id="userInputBlock">{textToDisplay} </div>
          </>
        )}
        <div className="inputBarBlock mt-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                style={{
                  padding: "2em 1em",
                  borderRadius: "none",
                  backgroundColor: "rgb(235, 235, 235)",
                }}
              >
                &gt;&gt;
              </span>
            </div>
            <textarea
              style={{ backgroundColor: "rgb(245, 245, 245)" }}
              className="form-control textareaBar"
              aria-label="With textarea"
              value={userInputText}
              onChange={setTextAsInput}
              id="inputArea"
              ref={textInput}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightBlock;
