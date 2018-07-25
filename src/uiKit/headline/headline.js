import React from "react";
import T from "prop-types";
import { css } from "emotion";
import { INDIGO } from "../../uiKit/variables/colors.js";

const styles = {
  headline: css`
    font-size: 18px;
    font-weight: bold;
    color: ${INDIGO};
    margin: 30px 0;
  `
};

export function Headline({ children }) {
  return <div className={`${styles.headline}`}>{children}</div>;
}

Headline.propTypes = {
  children: T.node.isRequired
};
