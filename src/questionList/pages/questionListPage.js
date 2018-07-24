import React, { Component } from "react";
import {
  QuestionListProvider,
  connect
} from "../provider/questionListProvider.js";
import QuestionList from "../components/questionList.js";

const QuestionListContainer = connect(QuestionList);

class QuestionListPage extends Component {
  render() {
    return (
      <div>
        <QuestionListProvider>
          Question List Page
          <QuestionListContainer />
        </QuestionListProvider>
      </div>
    );
  }
}

export default QuestionListPage;
