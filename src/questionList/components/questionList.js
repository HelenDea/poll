import React from "react";
import T from "prop-types";
import QuestionItem from "./questionItem.js";
import { Button } from "../../uiKit/button.js";
import styles from "./questionList.styles.js";

export default function QuestionList({ questionList, loadMore, hasMore }) {
  return (
    <div>
      <div className={styles.questionList}>
        {questionList &&
          questionList.map(item => (
            <div className={styles.questionItem}>
              <QuestionItem
                key={item.url}
                question={item.question}
                published_at={item.published_at}
                url={item.url}
                choicesNumber={item.choices.length}
              />
            </div>
          ))}
      </div>
      {hasMore && (
        <div className={styles.buttonHolder}>
          <Button onClick={loadMore}>Load more</Button>
        </div>
      )}
    </div>
  );
}

QuestionList.propTypes = {
  questionList: T.array,
  loadMore: T.func.isRequired,
  hasMore: T.bool.isRequired
};
