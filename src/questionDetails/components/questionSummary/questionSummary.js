import React from "react";
import T from "prop-types";

export default function QuestionSummary({ questionData }) {
  if (!questionData) return null;
  const { question, choices } = questionData;
  return (
    <div>
      <div>Question: {question}</div>
      {choices.map(item => (
        <div key={item.url}>
          {item.choice} {item.percentage.toFixed(2)}
        </div>
      ))}
    </div>
  );
}

QuestionSummary.proptypes = {
  questionData: T.shape({
    question: T.string.isRequired,
    choices: T.array.isRequired
  })
};
