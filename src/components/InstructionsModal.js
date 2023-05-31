import React, { useState } from 'react';
import Modal from 'react-modal';


const InstructionsModal = ({ isOpen, onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [agreed, setAgreed] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (agreed && name.trim() !== '') {
        onSubmit(name); // Pass the name to the onSubmit function
        onClose(); // Close the modal
      } else {
        // Handle form validation or show an error message
      }
    };
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleAgreementChange = (e) => {
      setAgreed(e.target.checked);
    };
  
    return (
      <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Instructions">
        <h2>Instructions</h2>
        <p>
          <li>Welcome to the Website responsiveness study. </li>
          <li>You will encounter 9 tasks and you have to type exactly what you see on your left screen in the box provided on the right side of your screen.</li>
          <li>Enter your roll number in the field provided. If you don't have a roll number, type your name</li>
                    <li>Once you're okay with starting the game, Tick the checkbox and wait for recording to start before starting with tasks</li>
                    <li>Note that by clicking agree, you give consent to being recorded</li>
                    <li>Once you're done, click on stop recording button and download the video and upload in the link provided</li>
                    <li>If you're prompted with any excel file downloads at the end of the game, be sure to save it </li>
                    <li>Make sure to look at the screen at all times.</li>
                    <li> Do not turn your head away from the screen. Play the game in a well lit environment</li>
                    <li>You can find these instructions after starting the game on top right</li></p>
        <form onSubmit={handleSubmit}>
          <label>
            Name/Roll Number:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={agreed}
              onChange={handleAgreementChange}
            />
            I agree for capturing my video
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    );
  };
  
  // export {agreed};
  export default InstructionsModal;
