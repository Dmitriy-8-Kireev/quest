import React, { Component } from "react";
import "./App.css";
import { Pic } from "./Pic";

const IMGS_DATA = {
  Picture1:
    "http://dl3.joxi.net/drive/2018/07/24/0027/1686/1799830/30/32635ae563.jpg",
  Picture2:
    "http://dl3.joxi.net/drive/2018/07/24/0027/1686/1799830/30/03f67e52ae.jpg",
  Picture3:
    "http://dl3.joxi.net/drive/2018/07/24/0027/1686/1799830/30/18640951d3.jpg",
  Picture4:
    "http://dl3.joxi.net/drive/2018/07/24/0027/1686/1799830/30/0bf7d53c53.jpg",
  Picture5:
    "http://dl3.joxi.net/drive/2018/07/24/0027/1686/1799830/30/d4e6940379.jpg",
  Picture6:
    "http://dl3.joxi.net/drive/2018/07/24/0027/1686/1799830/30/9e3e011887.jpg",
  Picture7:
    "http://dl3.joxi.net/drive/2018/07/24/0027/1686/1799830/30/3a8339df21.jpg",
  Picture8:
    "http://dl4.joxi.net/drive/2018/07/24/0027/1686/1799830/30/184fe0fa97.jpg",
  start:
    "http://dl3.joxi.net/drive/2018/07/24/0027/1686/1799830/30/18b3c12c33.jpg"
};

class App extends Component {
  state = {
    name: IMGS_DATA.start
  };
  readUrl = e => {
    this.setState({
      name: IMGS_DATA[e.currentTarget.dataset.name]
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Спаси принцессу - выбери язык програмирования:)
          </h1>
        </header>
        <div className="buttons">
          <button data-name="Picture1" onClick={this.readUrl}>
            JavaScript
          </button>{" "}
          <button data-name="Picture2" onClick={this.readUrl}>
            C
          </button>{" "}
          <button data-name="Picture3" onClick={this.readUrl}>
            Java
          </button>{" "}
          <button data-name="Picture4" onClick={this.readUrl}>
            Lisp
          </button>{" "}
          <button data-name="Picture5" onClick={this.readUrl}>
            C#
          </button>{" "}
          <button data-name="Picture6" onClick={this.readUrl}>
            Go
          </button>{" "}
          <button data-name="Picture7" onClick={this.readUrl}>
            Pascal
          </button>{" "}
          <button data-name="Picture8" onClick={this.readUrl}>
            PHP
          </button>{" "}
        </div>
        <Pic url={this.state.name} />
      </div>
    );
  }
}

export default App;
