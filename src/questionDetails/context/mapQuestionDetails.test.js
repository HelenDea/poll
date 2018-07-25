import { mapToQuestionDetails } from "./mapQuestionDetails.js";
let question = {
  url: "questions/1",
  question: "question",
  choices: [
    {
      url: "questions/1/choices/1",
      choice: "choice1",
      votes: 10
    },
    {
      url: "questions/1/choices/2",
      choice: "choice1",
      votes: 20
    },
    {
      url: "questions/1/choices/notANumber",
      choice: "choice1",
      votes: 0
    }
  ]
};
describe("mapToQuestionDetails", () => {
  it("should return valid percentage per url, question and other data", () => {
    const questionSummary = mapToQuestionDetails(question);
    expect(questionSummary.url).toEqual(question.url);
    expect(questionSummary.question).toEqual(question.question);
    expect(questionSummary.choices).toBeDefined();
    expect(questionSummary.choices.length).toEqual(question.choices.length);
  });

  it("should map question Id from url ", () => {
    const questionSummary = mapToQuestionDetails(question);
    expect(questionSummary.id).toEqual(1);
  });

  it("should map choice Id from url ", () => {
    const questionSummary = mapToQuestionDetails(question);
    expect(questionSummary.choices[0].id).toEqual(1);
    expect(questionSummary.choices[1].id).toEqual(2);
  });

  it("should return null for choice id if url has invalid structure ", () => {
    const questionSummary = mapToQuestionDetails(question);
    expect(questionSummary.choices[2].id).toEqual(null);
  });

  it("should return valid percentage per choice", () => {
    const questionSummary = mapToQuestionDetails(question);
    expect(questionSummary.choices[0].percentage).toEqual(
      (question.choices[0].votes * 100) / 30
    );
    expect(questionSummary.choices[1].percentage).toEqual(
      (question.choices[1].votes * 100) / 30
    );
  });

  it("should return question data with percentage equal zero for the first item", () => {
    question.choices[0].votes = 0;
    const questionSummary = mapToQuestionDetails(question);
    expect(questionSummary.choices[0].percentage).toEqual(0);
    expect(questionSummary.choices[1].percentage).toEqual(100);
  });

  it("should return question data with percentage equal zero for the first item", () => {
    let questionWithFirstChoiceZeroVotes = {
      url: question.url,
      question: question.url,
      choices: [...question.choices]
    };
    questionWithFirstChoiceZeroVotes.choices[0].votes = 0;
    const questionSummary = mapToQuestionDetails(question);
    expect(questionSummary.choices[0].percentage).toEqual(0);
    expect(questionSummary.choices[1].percentage).toEqual(100);
  });
});
