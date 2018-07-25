import React from "react";
import { Headline } from "../../uiKit/headline.js";
import { QuestionDetailsProvider } from "../context/questionDetailsContext.js";
import QuestionDetailsContainer from "../containers/questionDetailsContainer.js";

export default function QuestionDetailsPage({ match }) {
  return (
    <div>
      <QuestionDetailsProvider>
        <Headline>Question Details Page</Headline>
        <QuestionDetailsContainer questionId={match.params.questionId} />
      </QuestionDetailsProvider>
    </div>
  );
}
