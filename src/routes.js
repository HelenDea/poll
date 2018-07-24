import React from "react";
import { Route, Switch } from "react-router";
import Home from "./home/homePage.js";
import QuestionListPage from "./questionList/pages/questionListPage.js";
import QuestionDetailsPage from "./questionDetails/pages/questionDetailsPage.js";

export const Routes = (
  <Switch>
    <Route exact path="/questions" component={QuestionListPage} />
    <Route exact path="/questions/:id" component={QuestionDetailsPage} />
    <Route exact path="/" component={Home} />
  </Switch>
);
