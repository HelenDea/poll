import React from "react";
import { shallow } from "enzyme";
// import sinon from 'sinon';

import QuestionList from "./questionList.js";
import QuestionItem from "./questionItem.js";
import { Button } from "../../uiKit/button.js";

describe.only("<QuestionList />", () => {
  it("should not render <QuestionItem /> if questionList is not provided ", () => {
    const wrapper = shallow(
      <QuestionList questionList={[]} loadMore={() => {}} hasMore={false} />
    );
    expect(wrapper.find(QuestionItem).length).toEqual(0);
  });

  it("should render <QuestionItem /> if questionList is provided ", () => {
    const questionList = [
      {
        question: "1",
        url: "url/1",
        published_at: Date.now().toString(),
        choices: []
      },
      {
        question: "2",
        url: "url/2",
        published_at: Date.now().toString(),
        choices: []
      }
    ];
    const wrapper = shallow(
      <QuestionList
        questionList={questionList}
        loadMore={() => {}}
        hasMore={false}
      />
    );
    expect(wrapper.find(QuestionItem).length).toEqual(2);
  });
  it("should render <Button /> if hasMore is true ", () => {
    const wrapper = shallow(
      <QuestionList questionList={[]} loadMore={() => {}} hasMore={true} />
    );
    expect(wrapper.find(Button).length).toEqual(1);
  });
});
