import { mapToQuestionSummary } from "./mapQuestionDetails.js";
let question = {
  url: "url",
  question: "question",
  choices: [
    {
      url: "url",
      choice: "choice1",
      votes: 10
    },
    {
      url: "url",
      choice: "choice1",
      votes: 20
    }
  ]
};
describe("mapToQuestionSummary", () => {
  it("should return valid percentage per url, question and other data", () => {
    const questionSummary = mapToQuestionSummary(question);
    expect(questionSummary.url).toEqual(question.url);
    expect(questionSummary.question).toEqual(question.question);
    expect(questionSummary.choices).toBeDefined();
    expect(questionSummary.choices.length).toEqual(question.choices.length);
  });

  it("should return valid percentage per choice", () => {
    const questionSummary = mapToQuestionSummary(question);
    expect(questionSummary.choices[0].percentage).toEqual(
      (question.choices[0].votes * 100) / 30
    );
    expect(questionSummary.choices[1].percentage).toEqual(
      (question.choices[1].votes * 100) / 30
    );
  });

  it("should return question data with percentage equal zero for the first item", () => {
    question.choices[0].votes = 0;
    const questionSummary = mapToQuestionSummary(question);
    expect(questionSummary.choices[0].percentage).toEqual(0);
    expect(questionSummary.choices[1].percentage).toEqual(100);
  });
});
