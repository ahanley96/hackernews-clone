import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { SideBarNav } from "./components/Header/SideBarNav";
import { BackDrop } from "./components/Header/BackDrop";
import { FullPageLoader } from "./components/FullPageLoader/FullPageLoader";

import "./App.css";
import { Routes } from "./Routes";

export class App extends Component {
  state = {
    sideBarOpen: false
  };

  handleOpen = () => {
    this.setState({
      sideBarOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      sideBarOpen: false
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <FullPageLoader />

          <Header open={this.handleOpen} />

          {this.state.sideBarOpen ? (
            <div>
              <BackDrop close={this.handleClose} />
              <SideBarNav
                close={this.handleClose}
                sideBarOpen={this.state.sideBarOpen}
              />
            </div>
          ) : null}
      
          <Routes />
        </div>
      </Router>
    );
  }
}
