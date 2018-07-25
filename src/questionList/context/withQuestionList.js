import React from "react";
import { QuestionListConsumer } from "./questionListContext.js";

export function withQuestionList(Component) {
  return function QuestionListComponent(props) {
    return (
      <QuestionListConsumer>
        {value => <Component {...props} {...value} />}
      </QuestionListConsumer>
    );
  };
}
