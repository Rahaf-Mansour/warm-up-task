import React, { Component } from "react";
import Header from "./components/Header/Header";
import FormActionsControl from "./components/FormActionsControl/FormActionsControl";
import SearchAndEmployeeContainer from "./components/SearchAndEmployeeContainer/SearchAndEmployeeContainer";

export default class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <SearchAndEmployeeContainer />
        <FormActionsControl />
      </div>
    );
  }
}
