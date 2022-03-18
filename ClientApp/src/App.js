import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import { Header } from "./components/Header";
import { CSVImport } from "./components/CsvImport";

class App extends Component {
  state = {
    user: {},
    users: [],
    numberOfUsers: 0,
  };

  render() {
    return (
      <div className="App">
        <Header></Header>
        <CSVImport />
      </div>
    );
  }
}

export default App;
