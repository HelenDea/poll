import React, { Component } from "react";
import { API_BASE_URL } from "../../common/config.js";
const QuestionListContext = React.createContext({
  questionList: []
});

function fetchQuestionList(page = 1, callback) {
  fetch(`${API_BASE_URL}/questions?page=${page}`)
    .then(response => response.status === 200 && response.json())
    .then(callback);
}

export class QuestionListProvider extends Component {
  state = { questionList: [], page: 1 };

  componentDidMount() {
    fetchQuestionList(this.state.page, data => {
      this.setState({
        questionList: data,
        hasMore: !!data.length
      });
    });
  }

  loadMore = event => {
    fetchQuestionList(this.state.page + 1, data => {
      this.setState({
        questionList: [...this.state.questionList, ...data],
        page: this.state.page + 1,
        hasMore: data.length
      });
    });
  };

  render() {
    return (
      <QuestionListContext.Provider
        value={{
          questionList: this.state.questionList,
          hasMore: this.state.hasMore,
          loadMore: this.loadMore
        }}
      >
        {this.props.children}
      </QuestionListContext.Provider>
    );
  }
}

export function connect(Component) {
  return function QuestionListComponent(props) {
    return (
      <QuestionListContext.Consumer>
        {value => <Component {...props} {...value} />}
      </QuestionListContext.Consumer>
    );
  };
}
