import React from "react";
import { QuestionDetailsConsumer } from "./questionDetailsContext.js";
import { mapToQuestionSummary } from "./mapQuestionDetails.js";

export function withQuestionSummary(Component) {
  return function QuestionSummaryComponent(props) {
    return (
      <QuestionDetailsConsumer>
        {value => (
          <Component
            {...props}
            questionData={mapToQuestionSummary(value.questionData)}
          />
        )}
      </QuestionDetailsConsumer>
    );
  };
}
