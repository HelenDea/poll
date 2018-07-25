# Polls

Single page application that lets users vote through the Polls.

## Implementation description

Please consider that this is not a production ready application and implemented within the suggested time.

- The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and ejected in order to add enzyme for testing.
- React Context API is used for data layer and 'prop drilling'. As an alternative we can use Redux too.
- For data fetching `fetch` is used.
- For styling [emotion](https://github.com/emotion-js/emotion), css-in-js, was selected.
- A separate independent package can be created from `uiKit` folder.
- Some unit tests are provided as an example (questionList.test.js, mapQuestionDetails.test.js).There is no full unit test coverage. UI tests are not provided.
- I also left some ToDos that describe possible improvements.

Comments to the challenge / potential improvements:

- Pagination. http://docs.pollsapi.apiary.io/ API does not provide full pagination functionality: no page size, page starts with 1, page=2 returns 404. I implemented a 'Load More' functionality in order to support loading more data.
- Voting. With the current API it is not possible to see if user already voted. I decided to put 'isVoted' state in the Component. Potentially, we can also use localStorage or other alternatives. I also show percentage of the votes only after user submits his votes.
- API structure. API returns 'url' for Questions and Choices. I'd suggest to replace it with ids. Client should be responsible on managing urls.

## Available Scripts

Instal packages with `yarn install` or `npm install`.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

# Task description

## Outline

Please build a single page application that lets users vote through the Polls
API. Documentation for the API is available at http://docs.pollsapi.apiary.io/. Refer to the documentation for details on how to query the API.

## Features

- [List of questions page](http://pasteboard.co/8AReDrPvo.jpg)
- [Question detail page](http://pasteboard.co/8ARC7212L.jpg)
- Optional stretch goal: Create new question page
