import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  function changeRocketItem(rocket) {
    props.changeRocket(rocket);
  }
  return (
    <>
      <header className="header">
        <img src={logo} alt="Logo Space X" className="logo" />
        <nav className="main-nav nav">
          <ul className="list">
            {props.rocketsNames.map((item, index) => (
              <li className="item" key={index}>
                <Link
                  to="/"
                  onClick={() => {
                    changeRocketItem(item);
                  }}
                  className="item-link">
                  {item}
                </Link>
              </li>
            ))}
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
