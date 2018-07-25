import { css } from "emotion";
import { DARK_GREY, LIGHT_GREY, INDIGO } from "../../uiKit/variables/colors.js";

export default {
  navigationBar: css`
    border-bottom: 1px solid ${LIGHT_GREY};
    width: 100%;
    font-weight: bold;
    font-size: 14px;
  `,
  menuItem: css`
    padding: 20px 40px;
    display: inline-block;
    text-decoration: none;
    color: ${DARK_GREY};
    border-bottom: 2px solid transparent;

    &:hover,
    &.active {
      border-bottom: 2px solid ${INDIGO};
    }
  `
};
