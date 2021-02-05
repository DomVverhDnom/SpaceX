import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="Logo Space X" className="logo" />
        <nav className="main-nav nav">
          <ul className="list">
            <li className="item">
              <Link to="/" className="item-link">
                Falcon 1
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item-link">
                Falcon 9
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item-link">
                Falcon Heavy
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item-link">
                Updates
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="secondary-nav">
          <ul className="list">
            <li className="item">
              <Link to="/" className="item-link">
                Home
              </Link>
            </li>
            <li className="item">
              <Link to="/Calendar" className="item-link">
                Calendar
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
