import React from "react";
import { Link } from "react-router-dom";
import Headline from "../Headline/Headline";
function Header() {
  return (
    <>
      <header data-test="header">
        <nav>
          <div className="nav-wrapper blue ">
            <div className="container">
              <Link
                to="#"
                className="brand-logos left-align"
                data-test="brand-logo"
              >
                Logo
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/component">Components</Link>
                </li>
                <li>
                  <Link to="/javascirpt">JavaScript</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
