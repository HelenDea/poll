import React from "react";
import T from "prop-types";
import { NavLink } from "react-router-dom";

export default function QuestionItem({ question, url, choicesNumber }) {
  return (
    <div>
      <NavLink to={url}>{question}</NavLink>
      Choices Number {choicesNumber}
    </div>
  );
}

QuestionItem.proptypes = {
  question: T.string.isRequired,
  url: T.string.isRequired,
  choicesNumber: T.number.isRequired
};
