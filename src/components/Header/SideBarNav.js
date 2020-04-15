import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const SideBarNav = ({ close }) => {

  return (
    <nav className="side-nav-bar">
      <ul>
        <li>
          <i className="material-icons" onClick={close}>
            close
          </i>
        </li>
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
    </nav>
  );
};
