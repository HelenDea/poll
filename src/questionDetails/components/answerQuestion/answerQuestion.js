import React, { Component } from "react";
import T from "prop-types";

export default class AnswerQuestion extends Component {
  state = {
    selectedChoiceId: null
  };

  onChoiceChanged = e => {
    const selectedId = e.currentTarget.value;
    if (this.state.selectedChoiceId !== selectedId)
      this.setState({
        selectedChoiceId: selectedId
      });
  };

  vote = () => {
    this.props.vote(this.props.questionData.id, this.state.selectedChoiceId);
  };

  render() {
    if (!this.props.questionData) return null;
    const { question, id, choices } = this.props.questionData;
    return (
      <div>
        <div>Question: {question}</div>
        {choices.map(item => (
          <div key={item.id}>
            <input
              type="radio"
              id={item.id}
              name={id}
              onChange={this.onChoiceChanged}
              value={item.id}
            />
            <label htmlFor={item.id}>{item.choice}</label>
          </div>
        ))}
        <button disabled={!this.state.selectedChoiceId} onClick={this.vote}>
          Vote
        </button>
      </div>
    );
  }
}
AnswerQuestion.proptypes = {
  questionData: T.shape({
    question: T.string.isRequired,
    choices: T.array.isRequired
  }),
  vote: T.func.isRequired
};
