import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = ({ open }) => {
  return (
    <nav className="nav-bar">
      <div className="nav-icon" onClick={open}>
        <i className="large material-icons">menu</i>
      </div>

      <Link to="/">
        <div className="nav-logo">
          <i class="large material-icons">library_books</i>
        </div>
      </Link>

      <div className="nav-spacing" />

      <div className="nav-items">
        <ul>
          <Link className="link" to="/">
            <li id="home">Home</li>
          </Link>

          <Link className="link" to="/topstories">
            <li id="top-stories">Top Stories</li>
          </Link>

          <Link className="link" to="/beststories">
            <li id="best-stories">Best Stories</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
