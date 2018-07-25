import React from "react";
import { QuestionDetailsConsumer } from "./questionDetailsContext.js";
import { mapToQuestionDetails } from "./mapQuestionDetails.js";

export function withQuestionDetails(Component) {
  return function QuestionDetailsComponent(props) {
    return (
      <QuestionDetailsConsumer>
        {value => (
          <Component
            {...props}
            load={value.load}
            vote={value.vote}
            isVoted={value.isVoted}
            questionData={mapToQuestionDetails(value.questionData)}
          />
        )}
      </QuestionDetailsConsumer>
    );
  };
}
