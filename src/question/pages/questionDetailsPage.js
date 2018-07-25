import React, { Component } from "react";
import { QuestionDetailsProvider } from "../context/questionDetailsContext.js";
import QuestionDetailsContainer from "../containers/questionDetailsContainer.js";
import { Headline } from "../../uiKit/headline.js";

class QuestionDetailsPage extends Component {
  render() {
    return (
      <div>
        <QuestionDetailsProvider>
          <Headline>Question Details Page</Headline>
          <QuestionDetailsContainer
            questionId={this.props.match.params.questionId}
          />
        </QuestionDetailsProvider>
      </div>
    );
  }
}

export default QuestionDetailsPage;
