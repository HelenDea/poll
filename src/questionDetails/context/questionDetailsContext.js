import React, { Component } from "react";
import { API_BASE_URL } from "../../common/config.js";

const QuestionDetailsContext = React.createContext({});
export const QuestionDetailsConsumer = QuestionDetailsContext.Consumer;

function fetchQuestionDetails(questionId, callback) {
  fetch(`${API_BASE_URL}/questions/${questionId}`)
    .then(response => response.status === 200 && response.json())
    .then(callback)
    .catch(function(res) {
      // ToDo: Add error handling
      console.log(res);
    });
}

function postChoice(questionId, choiceId, callback) {
  fetch(`${API_BASE_URL}/questions/${questionId}/choices/${choiceId}`, {
    method: "POST"
  })
    .then(response => response.status === 201 && response.json())
    .then(callback)
    .catch(res => {
      // ToDo: Add error handling
      console.log(res);
    });
}

export class QuestionDetailsProvider extends Component {
  state = {
    questionData: null,
    isVoted: false
  };

  load = questionId => {
    fetchQuestionDetails(questionId, data => {
      this.setState({
        questionData: data
      });
    });
  };

  vote = (questionId, choiceId) => {
    postChoice(questionId, choiceId, newChoiceData => {
      let newQuestionData = Object.assign(this.state.questionData, {});
      const updatedChoiceIndex = newQuestionData.choices.findIndex(
        item => item.url === newChoiceData.url
      );
      if (updatedChoiceIndex >= 0) {
        newQuestionData.choices[updatedChoiceIndex] = newChoiceData;
      }
      this.setState({
        questionData: newQuestionData,
        isVoted: true
      });
    });
  };

  render() {
    return (
      <QuestionDetailsContext.Provider
        value={{
          questionData: this.state.questionData,
          isVoted: this.state.isVoted,
          load: this.load,
          vote: this.vote
        }}
      >
        {this.props.children}
      </QuestionDetailsContext.Provider>
    );
  }
}
