// import React, { useState } from 'react';
// import { GoogleAuth } from 'google-auth-library';
// import { writeFile } from 'file-saver';

// const TextInputLogger = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [logs, setLogs] = useState([]);

//   const handleInputChange = (event) => {
//     const timestamp = new Date().toISOString();
//     const inputLetter = event.target.value.slice(-1);
//     const logEntry = `${timestamp} - ${inputLetter}`;
//     const updatedLogs = [...logs, logEntry];
//     setLogs(updatedLogs);
//     setInputValue(event.target.value);
//   };

//   const handleDownloadLogs = async () => {
//     try {
//       const auth = new GoogleAuth({
//         clientId: '137818582616-kag0uaiob2tumspeqp7oepvhbsepufvc.apps.googleusercontent.com',
//         clientSecret: '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',
//       });
//       const credentials = await auth.getClient();
//       const accessToken = credentials.credentials.access_token;

//       const spreadsheetData = [['Timestamp', 'Letter'], ...logs.map((log) => log.split(' - '))];
//       const sheetData = spreadsheetData.map((row) => ({ values: row.map((value) => ({ userEnteredValue: { stringValue: value } })) }));

//       const requestBody = {
//         requests: [
//           {
//             addSheet: {
//               properties: {
//                 title: 'Log Data',
//               },
//             },
//           },
//           {
//             updateCells: {
//               start: { sheetId: 0, rowIndex: 0, columnIndex: 0 },
//               rows: sheetData,
//               fields: 'userEnteredValue',
//             },
//           },
//         ],
//       };

//       const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets?access_token=${accessToken}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestBody),
//       });

//       if (response.ok) {
//         const fileData = await response.json();
//         const fileId = fileData.spreadsheetId;
//         const downloadUrl = `https://docs.google.com/spreadsheets/export?id=${fileId}&format=xlsx`;

//         const downloadResponse = await fetch(downloadUrl);
//         const blob = await downloadResponse.blob();
//         writeFile(blob, 'log_data.xlsx');
//       } else {
//         console.error('Failed to create spreadsheet:', response.status, response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handleInputChange} />
//       <button onClick={handleDownloadLogs}>Download Logs</button>
//     </div>
//   );
// };

// export default TextInputLogger;