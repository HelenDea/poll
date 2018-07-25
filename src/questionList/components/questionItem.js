import React from "react";
import T from "prop-types";
import { NavLink } from "react-router-dom";
import Moment from "react-moment";
import { DATE_FORMAT } from "../../common/config.js";
import styles from "./questionItem.styles.js";

export default function QuestionItem({
  question,
  url,
  published_at,
  choicesNumber,
  className
}) {
  return (
    <div className={`${styles.questionBlock} ${className}`}>
      <div className={styles.title}>
        <NavLink to={url}>{question}</NavLink>
      </div>
      <div className={styles.questionInfo}>
        <div>
          <span className={styles.label}>Choices #:</span>
          {choicesNumber}
        </div>
        <div>
          <span className={styles.label}>Published date:</span>
          <Moment format={DATE_FORMAT}>{published_at}</Moment>
        </div>
      </div>
    </div>
  );
}

QuestionItem.proptypes = {
  question: T.string.isRequired,
  url: T.string.isRequired,
  published_at: T.instanceOf(Date),
  choicesNumber: T.number.isRequired,
  className: T.string
};
