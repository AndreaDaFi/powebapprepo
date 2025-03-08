import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Import the App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Make sure this matches the root div in index.html
);