import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';  // Make sure the path is correct
import Customerlogin from './customerlogin';
import Employeelogin from './employeelogin';
import Home from './home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  {/* Include the Navbar here */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/employeelogin" element={<Employeelogin />} />
          <Route exact path="/customerlogin" element={<Customerlogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;