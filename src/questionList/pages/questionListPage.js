import React, { Component } from "react";
import {
  QuestionListProvider,
  connect
} from "../provider/questionListProvider.js";
import QuestionList from "../components/questionList.js";
import { Headline } from "../../uiKit/headline/headline.js";

const QuestionListContainer = connect(QuestionList);

class QuestionListPage extends Component {
  render() {
    return (
      <div>
        <QuestionListProvider>
          <Headline>Question List Page</Headline>
          <QuestionListContainer />
        </QuestionListProvider>
      </div>
    );
  }
}

export default QuestionListPage;
