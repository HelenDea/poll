import React from "react";
import T from "prop-types";
import { css } from "emotion";
import { WHITE, INDIGO } from "./variables/colors.js";

const styles = {
  button: css`
    padding: 0 20px;
    min-width: 130px;
    color: ${WHITE};
    height: 36px;
    font-size: 16px;
    border: 0;
    font-weight: bold;
    border-radius: 4px;
    background-color: ${INDIGO};
  `
};

export function Button({ children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

Button.proptTypes = {
  children: T.node.isRequired,
  onClick: T.func.isRequired
};
