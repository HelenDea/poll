function getLastIdFromUrl(url) {
  if (!url) {
    return null;
  }
  const blocks = url.split("/");
  const idStr = blocks.length > 1 ? blocks[blocks.length - 1] : blocks[1];
  const id = parseInt(idStr, 10);
  return !isNaN(id) ? id : null;
}

export function mapToQuestionDetails(questionData, addPercentage) {
  if (!questionData) {
    return questionData;
  }
  const totalVotesNumber = questionData.choices.reduce(
    (total, choice) => total + choice.votes,
    0
  );
  return {
    question: questionData.question,
    id: getLastIdFromUrl(questionData.url),
    url: questionData.url,
    choices: questionData.choices.map(item => {
      return {
        choice: item.choice,
        url: item.url,
        id: getLastIdFromUrl(item.url),
        percentage: item.votes > 0 ? (item.votes * 100) / totalVotesNumber : 0
      };
    })
  };
}
