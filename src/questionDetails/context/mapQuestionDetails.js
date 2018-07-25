export function mapToQuestionSummary(questionData) {
  if (!questionData) {
    return questionData;
  }
  const totalVotesNumber = questionData.choices.reduce(
    (total, choice) => total + choice.votes,
    0
  );
  return {
    question: questionData.question,
    url: questionData.url,
    choices: questionData.choices.map(item => {
      return {
        choice: item.choice,
        url: item.url,
        percentage: item.votes > 0 ? (item.votes * 100) / totalVotesNumber : 0
      };
    })
  };
}
