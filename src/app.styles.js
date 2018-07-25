import { css } from "emotion";
import { MEDIUM_BREAKPOINT } from "./common/config.js";
export default {
  pageContent: css`
    padding: 40px 80px;

    @media (max-width: ${MEDIUM_BREAKPOINT}) {
      padding: 20px 5px;
    }
  `
};
