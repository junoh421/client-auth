import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/signin">
              <button className="btn btn-info btn-sm">
                Log in
              </button>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/signup">
              <button className="btn btn-success btn-sm">
                Sign Up
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header;
