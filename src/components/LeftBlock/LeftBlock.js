import React, { useContext, useEffect, useState } from "react";
import UmContext from "../Context/UmContext";
import "./LeftBlock.css";

function LeftBlock() {
  var sampleText = {
    0: "The quick brown fox jumps over the lazy dog",
    1: "The early bird catches the worm",
    2: "A picture is worth a thousand words",
    3: "Actions speak louder than words",
    4: "All is fair in love and war",
    5: "Better late than never",
    6: "Beauty is in the eye of the beholder",
    7: "When in Rome, do as the Romans do",
    8: "Kindness is a language that transcends all barriers and has the power to change lives",
    
  };

  const { currentTaskNumber, setCurrentTaskNumber } = useContext(UmContext);
  const { currentGivenText, setCurrentGivenText } = useContext(UmContext);
  const { totalTasks, setTotalTasks } = useContext(UmContext);

  useEffect(() => {
    setTotalTasks(Object.keys(sampleText).length);
  }, []);

  useEffect(() => {
    setCurrentGivenText(sampleText[currentTaskNumber - 1]);
  });

  return (
    <>
      <div className="col-md-5" id="leftBlock">
        <h4 id="givenTextHeader">Given Text:</h4>
        <div id="textBlock">{currentGivenText}</div>
      </div>
    </>
  );
}

export default LeftBlock;
