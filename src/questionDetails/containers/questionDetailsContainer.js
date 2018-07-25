import React, { Component } from "react";
import { withQuestionDetails } from "../context/withQuestionDetails.js";
import { withQuestionSummary } from "../context/withQuestionSummary.js";
import QuestionSummary from "../components/questionSummary/questionSummary.js";
import AnswerQuestion from "../components/answerQuestion/answerQuestion.js";

const QuestionSummaryContainer = withQuestionSummary(QuestionSummary);
const AnswerQuestionContainer = withQuestionDetails(AnswerQuestion);

class QuestionDetailsContainer extends Component {
  componentDidMount() {
    this.props.load(this.props.questionId);
  }

  render() {
    return !this.props.isVoted ? (
      <AnswerQuestionContainer />
    ) : (
      <QuestionSummaryContainer />
    );
  }
}

export default withQuestionDetails(QuestionDetailsContainer);
