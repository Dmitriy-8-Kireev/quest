import React, { Component } from "react";
import "./App.css";
import { Pic } from "./Pic";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Спаси принцессу - выбери язык програмирования:)
          </h1>
        </header>
        <Pic url={this.state.name} />
      </div>
    );
  }
}

export default App;
