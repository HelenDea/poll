import { css } from "emotion";
import { DARK_GREY, LIGHT_GREY, INDIGO } from "../../uiKit/variables/colors.js";
import { MEDIUM_BREAKPOINT } from "../../common/config.js";

export default {
  questionBlock: css`
    padding: 30px;
    border: 1px solid ${LIGHT_GREY};
    border-radius: 4px;
    color: ${DARK_GREY};

    @media (max-width: ${MEDIUM_BREAKPOINT}) {
      padding: 15px;
    }
  `,
  title: css`
    font-size: 18px;
    font-weight: bold;
    color: ${INDIGO};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    a,
    a:hover {
      color: ${INDIGO};
      text-decoration: none;
    }
  `,
  questionInfo: css`
    margin-top: 15px;
  `,
  label: css`
    color: ${LIGHT_GREY};
    margin-right: 5px;
  `
};
