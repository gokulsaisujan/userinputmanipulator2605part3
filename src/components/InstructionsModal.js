import React, { useState } from 'react';
import Modal from 'react-modal';
import * as XLSX from 'xlsx';
import { useEffect } from 'react';


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



    const logagreedToLocalStorage = () => {
      const timestamp = new Date().toISOString();
      const agreedData = { timestamp, agreed};
    
      // Retrieve existing logged data from local storage
      const existingData = JSON.parse(localStorage.getItem('loggedData') || '[]');
    
      // Add the new data to the existing logged data
      const updatedData = [...existingData, agreedData];
    
      // Save the updated data to local storage
      localStorage.setItem('loggedData', JSON.stringify(updatedData));
    
      console.log('Data logged to local storage!');
    };
    
    const retrieveLoggedDataFromLocalStorage = () => {
      const loggedData = JSON.parse(localStorage.getItem('loggedData') || '[]');
      return loggedData;
    };

    useEffect(()=>{logagreedToLocalStorage()},[agreed]);
    
    
    
    
    // const downloadLoggedDataAsExcel = () => {
    //   // Retrieve the logged data from local storage
    //   const loggedData = retrieveLoggedDataFromLocalStorage();
    
    //   // Create a new workbook
    //   const workbook = XLSX.utils.book_new();
    
    //   // Create a new worksheet
    //   const worksheet = XLSX.utils.json_to_sheet(loggedData);
    
    //   // Add the worksheet to the workbook
    //   XLSX.utils.book_append_sheet(workbook, worksheet, 'Logged Data');

      
    
    //   // Convert the workbook to an Excel file
    //   const excelData = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    
    //   // Convert the array buffer to a Blob
    //   const blob = new Blob([excelData], { type: 'application/octet-stream' });
    
    //   // Create a download link and trigger the file download
    //   const link = document.createElement('a');
    //   link.href = URL.createObjectURL(blob);
    //   link.download = 'logged_data.xlsx';
    //   link.click();
    // };
    
    
    
    
    
    
    // Utility function to convert string to ArrayBuffer
    const s2ab = (s) => {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i < s.length; i++) {
        view[i] = s.charCodeAt(i) & 0xff;
      }
      return buf;
    };
    
    
      
    
  
    return (
      <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Instructions">
        <h2>Instructions</h2>
        <p>
          <li>Welcome to the Website responsiveness study. </li>
          <li>You will encounter 9 tasks and you have to type exactly what you see on your left screen in the box provided on the right side of your screen.</li>
          <li>Enter your roll number in the field provided. If you don't have a roll number, type your name</li>
                    <li>Once you're okay with starting the game, tick the checkbox and wait for recording to start before starting with tasks</li>
                    <li>Do not refresh at any point after starting with the game as the progress will get lost</li>
                    <li>Note that by clicking agree, you give consent to being recorded</li>
                    <li>Once you're done, download the video and the excel file and upload in the link provided</li>
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
  
  export default InstructionsModal;
