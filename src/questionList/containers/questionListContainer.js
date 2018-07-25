import React, { Component } from "react";
import { withQuestionList } from "../context/withQuestionList.js";
import QuestionList from "../components/questionList.js";

class QuestionListContainer extends Component {
  componentWillMount() {
    this.props.load();
  }

  render() {
    return <QuestionList {...this.props} />;
  }
}

export default withQuestionList(QuestionListContainer);
