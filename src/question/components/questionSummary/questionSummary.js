import React from "react";
import T from "prop-types";
import cx from "classnames";
import { PercentageBlock } from "../../../uiKit/percentageBlock.js";
import questionStyles from "../question.styles.js";
import styles from "./questionSummary.styles.js";

export default function QuestionSummary({ questionData }) {
  if (!questionData) return null;
  const { question, choices } = questionData;
  return (
    <div>
      <div className={questionStyles.question}>Question: {question}</div>
      {choices.map(item => (
        <div
          key={item.url}
          className={cx(questionStyles.choiceItem, styles.choiceItem)}
        >
          <div className={styles.choiceInfoItem}>{item.choice}</div>
          <div className={styles.choiceInfoItem}>Votes:&nbsp;{item.votes}</div>
          <div className={styles.choiceInfoItem}>
            <PercentageBlock value={item.percentage} />
          </div>
        </div>
      ))}
    </div>
  );
}

QuestionSummary.propTypes = {
  questionData: T.shape({
    question: T.string.isRequired,
    choices: T.array.isRequired
  })
};
