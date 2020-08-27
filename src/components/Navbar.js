import React from 'react';
//import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <Link to="/">My Job Board</Link> */}
              <a className="nav-link" href="/jobboard">
                My Job Board
              </a>
            </li>
            <li className="nav-item">
              {/* <Link to="/search">Search</Link> */}
              <a className="nav-link" href="/search">
                Search
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
