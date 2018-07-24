import React from "react";
import T from "prop-types";
import QuestionItem from "./questionItem.js";

export default function QuestionList({ questionList, loadMore, hasMore }) {
  return (
    <div>
      {questionList &&
        questionList.map(item => (
          <QuestionItem
            key={item.url}
            question={item.question}
            url={item.url}
          />
        ))}
      {hasMore && <button onClick={loadMore}>Load more</button>}
    </div>
  );
}

QuestionList.proptypes = {
  questionList: T.array,
  loadMore: T.func.isRequired,
  hasMore: T.bool.isRequired
};
