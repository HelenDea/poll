import React from "react";
import { QuestionDetailsConsumer } from "./questionDetailsContext.js";

export function withQuestionDetails(Component) {
  return function QuestionDetailsComponent(props) {
    return (
      <QuestionDetailsConsumer>
        {value => <Component {...props} {...value} />}
      </QuestionDetailsConsumer>
    );
  };
}
