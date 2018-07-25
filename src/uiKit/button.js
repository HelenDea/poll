import React from "react";
import T from "prop-types";
import { css } from "emotion";
import cx from "classnames";
import { WHITE, INDIGO, LIGHT_GREY } from "./variables/colors.js";

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
  `,
  disabled: css`
    background-color: ${LIGHT_GREY};
  `
};

export function Button({ children, onClick, className, disabled }) {
  const buttonClassName = cx(styles.button, className, {
    [styles.disabled]: disabled
  });
  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

Button.proptTypes = {
  children: T.node.isRequired,
  onClick: T.func.isRequired,
  disabled: T.bool
};
