import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <p>
          <strong>Add members to Front-end development team</strong>
        </p>
        <div className="close">
          <p className="X-mark">✕</p>
          <p>ESC</p>
        </div>
      </header>
    );
  }
}
