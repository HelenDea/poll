import React, { Component } from "react";
import T from "prop-types";
import cx from "classnames";
import { Button } from "../../../uiKit/button.js";
import questionStyles from "../question.styles.js";
import styles from "./answerQuestion.styles.js";

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
        <div className={questionStyles.questionStyles}>
          Question: {question}
        </div>
        {choices.map(item => (
          <div
            key={item.id}
            className={cx(questionStyles.choiceItem, styles.choiceItem)}
          >
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
        <Button
          disabled={!this.state.selectedChoiceId}
          onClick={this.vote}
          className={styles.button}
        >
          Vote
        </Button>
      </div>
    );
  }
}
AnswerQuestion.propTypes = {
  questionData: T.shape({
    question: T.string.isRequired,
    choices: T.array.isRequired
  }),
  vote: T.func.isRequired
};
