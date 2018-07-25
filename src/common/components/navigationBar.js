import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigationBar.styles.js";

export default function NavigationBar() {
  return (
    <div className={`${styles.navigationBar}`}>
      <NavLink to="/" exact className={`${styles.menuItem}`}>
        Home
      </NavLink>

      <NavLink to={"/questions"} exact className={`${styles.menuItem}`}>
        Questions
      </NavLink>
    </div>
  );
}
