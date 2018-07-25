import { css } from "emotion";
import { MEDIUM_BREAKPOINT } from "../../common/config.js";

export default {
  questionList: css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `,
  questionItem: css`
    width: 30%;
    margin: 20px 0;

    @media (max-width: ${MEDIUM_BREAKPOINT}) {
      width: 100%;
    }
  `,
  buttonHolder: css`
    margin: 30px;
    text-align: center;
  `
};
