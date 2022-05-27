import React, { Component } from "react";
import "./App.css";
import MatchFindingApp from "./Components/MatchFindingApp/MatchFindingApp";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MatchFindingApp />;
  }
}

export default App;
