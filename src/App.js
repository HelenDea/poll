import React, { Component } from "react";
import NavigationBar from "./common/components/navigationBar.js";
import { Routes } from "./routes.js";
import styles from "./app.styles.js";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className={styles.pageContent}>{Routes}</div>
      </div>
    );
  }
}

export default App;
