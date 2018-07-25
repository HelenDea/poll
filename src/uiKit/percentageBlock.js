import React from "react";
import T from "prop-types";
import { css } from "emotion";
import { INDIGO, LIGHT_GREY, WHITE, DARK_GREY } from "./variables/colors.js";

const styles = {
  percentageHolder: css`
    height: 20px;
    width: 100%;
    border-radius: 4px;
    background-color: ${LIGHT_GREY};
    color: ${WHITE};
  `,
  percentageValue: css`
    position: absolute;
    color: ${DARK_GREY};
    line-height: 24px;
  `
};

const getPercentageStyles = pecentage => css`
  display: inline-block;
  width: ${pecentage}%;
  background-color: ${INDIGO};
  border-radius: 4px;
  height: 20px;
`;

export function PercentageBlock({ value }) {
  return (
    <div className={styles.percentageHolder}>
      <span className={styles.percentageValue}>{value.toFixed(2)}</span>
      <div className={getPercentageStyles(value)} />
    </div>
  );
}

PercentageBlock.propTypes = {
  value: T.number.isRequired
};
