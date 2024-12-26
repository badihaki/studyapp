# Software Engineer Study Guide
To run this app use 'npm run dev'.

## App Folder
All my routes are here.

## Lib Folder
Library
### Components
**Card.tsx**
    Returns a card component that shows the question and a blurb from the official docs about it. Hovering over the card flips it, where there are the tags and a button for more information that opens the QuestionModal component for that specific card.

    Card takes a question as props and uses that question to fill in information. Also passes the question to the QuestionModal component

**CardHolder.tsx**
    Returns a container that holds all the cards

**CreateQuestion.tsx**
    Returns a form that allows user to create a new question. The Form dispatches the new question to the store on submit.

**Nav.tsx**
    Returns a navigation bar to be used in the root page layout

**SearchBar.tsx**
    Returns a search bar to filter the questions to display in the view

**DeleteButton.tsx**
    Returns a button that deletes the question it's attached to. Once clicked, it opens up a confirmation area that requires input to fully delete the question.

**Header.tsx**
    Returns a custom header component to be used on each questions page

**QuestionModal.tsx**
    The modal window that pops up for the card. It takes a question as the props, and fills in it's parameters based on the question.

    It also carries the edit functionality. Clicking the 'Edit' button in the modal starts 'Editing Mode' where the user will find the fields replaces with input boxes to edit/delete fields. Edit Mode has a button to cancel edit and a button to save the edits. Edits are dispatched to the store.

### Model
**iquestion.tsx**
    question data interface. Contains fields for _id and:
        - question - the question that would be asked in the interview, string
        - docs - a summary of the official documentation, string
        - notes - user submitted notes, array of strings
        - tags - tags used for sorting and filter optimization, array of strings
        - difficulty - beginner, intermediate, advance, enum
    The schema/data model will follow this interface

### Actions
**questionActions**
    This script contains all actions needed to query the database, exported as function expressions:
        - addQuestionToDB - Takes in a question and adds it to the database. Returns the submitted question.
        - updateQuestionInDB - takes in a question and updates it in the database. Returns the updated question.
        - getQiestopmsFromDB - queries the database for all questions and returns them all.
        - removeQuestionFromDB - takes in an id as a string, queries the database for a question using the ID, and deletes the question. Returns the ID.

### Redux
**Question Slice**
    The question features slice contains the reducers to handle questions.
        - setAllQuestions - takes an array of questions as the payload action and makes the state of the slice that array
        - addQuestion - takes a question as the payload action and pushes that question into the state slice's array of questions
        - updateQuestion - takes a question as the payload action. Maps out the state's array of questions, checking which question has a matching ID to the payload, returns the questions that don't match 'as is' and updates the question that matches and returns that
        - removeQuestion - takes a string as the payload action, filters the state slice's question array to remove the question whose ID matches the payload.
