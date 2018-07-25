import React, { Component } from "react";
import { QuestionListProvider } from "../context/questionListContext.js";
import QuestionListContainer from "../containers/questionListContainer.js";
import { Headline } from "../../uiKit/headline/headline.js";

export default function QuestionDetailsPage() {
  return (
    <div>
      <QuestionListProvider>
        <Headline>Question List Page</Headline>
        <QuestionListContainer />
      </QuestionListProvider>
    </div>
  );
}
