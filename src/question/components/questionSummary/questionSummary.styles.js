import { css } from "emotion";

export default {
  choiceItem: css`
    display: flex;
    max-width: 800px;

    @media (max-width: 600px) {
      flex-direction: column;
      margin: 20px 0;
    }
  `,
  choiceInfoItem: css`
    flex: 1;
    padding-right: 10px;
  `
};
