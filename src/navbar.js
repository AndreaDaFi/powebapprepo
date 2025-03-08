import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/customerlogin">Customer Login</Link>
        </li>
        <li>
          <Link to="/employeelogin">Employee Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;