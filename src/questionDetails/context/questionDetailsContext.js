import React, { Component } from "react";
import { API_BASE_URL } from "../../common/config.js";

const QuestionDetailsContext = React.createContext({});
export const QuestionDetailsConsumer = QuestionDetailsContext.Consumer;

function fetchQuestionDetails(questionId, callback) {
  fetch(`${API_BASE_URL}/questions/${questionId}`)
    .then(response => response.status === 200 && response.json())
    .then(callback);
}

export class QuestionDetailsProvider extends Component {
  state = {};

  load = questionId => {
    fetchQuestionDetails(questionId, data => {
      this.setState({
        questionData: data
      });
    });
  };

  render() {
    return (
      <QuestionDetailsContext.Provider
        value={{
          questionData: this.state.questionData,
          load: this.load
        }}
      >
        {this.props.children}
      </QuestionDetailsContext.Provider>
    );
  }
}
