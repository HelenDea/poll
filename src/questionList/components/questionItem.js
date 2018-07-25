import React from "react";
import T from "prop-types";
import { NavLink } from "react-router-dom";
import Moment from "react-moment";
import { DATE_FORMAT } from "../../common/config.js";

export default function QuestionItem({
  question,
  url,
  published_at,
  choicesNumber
}) {
  return (
    <div cl>
      <NavLink to={url}>{question}</NavLink>
      Choices Number {choicesNumber}
      <Moment format={DATE_FORMAT}>{published_at}</Moment>
    </div>
  );
}

QuestionItem.proptypes = {
  question: T.string.isRequired,
  url: T.string.isRequired,
  published_at: T.instanceOf(Date),
  choicesNumber: T.number.isRequired
};
