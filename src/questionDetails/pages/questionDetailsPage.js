import React, { Component } from "react";
import { QuestionDetailsProvider } from "../context/questionDetailsContext.js";
import QuestionDetailsContainer from "../containers/questionDetailsContainer.js";

class QuestionDetailsPage extends Component {
  render() {
    return (
      <div>
        <QuestionDetailsProvider>
          Question Details Page
          <QuestionDetailsContainer
            questionId={this.props.match.params.questionId}
          />
        </QuestionDetailsProvider>
      </div>
    );
  }
}

export default QuestionDetailsPage;
