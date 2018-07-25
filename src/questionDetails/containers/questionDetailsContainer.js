import React, { Component } from "react";
import { withQuestionDetails } from "../context/withQuestionDetails.js";
import { withQuestionSummary } from "../context/withQuestionSummary.js";
import QuestionSummary from "../components/questionSummary/questionSummary.js";

const QuestionSummaryContainer = withQuestionSummary(QuestionSummary);

class QuestionDetailsContainer extends Component {
  componentDidMount() {
    this.props.load(this.props.questionId);
  }

  render() {
    return <QuestionSummaryContainer />;
  }
}

export default withQuestionDetails(QuestionDetailsContainer);
