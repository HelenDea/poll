import React from "react";
import { QuestionDetailsConsumer } from "./questionDetailsContext.js";
import { mapToQuestionDetails } from "./mapQuestionDetails.js";

export function withQuestionSummary(Component) {
  return function QuestionSummaryComponent(props) {
    return (
      <QuestionDetailsConsumer>
        {value => (
          <Component
            {...props}
            questionData={mapToQuestionDetails(value.questionData, true)}
          />
        )}
      </QuestionDetailsConsumer>
    );
  };
}
