import React, { useState, useEffect } from "react";
import styles from "./Quiz.module.css";
import QuizDisplay from "./QuizDisplay";
import QuizRecap from "./QuizRecap";

export let quiz = {
  quizTitle: "React Quiz Component Demo",
  quizSynopsis:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
  questions: [
    {
      question:
        "TRUE or FALSE? The new coronavirus was deliberately created or released by people ?",
      questionType: "text",
      questionPic: "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: ["True", "False", "Unknown"],
      correctAnswer: "0",
      submittedAnswer: "",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Viruses can change over time. Occasionally, a disease outbreak happens when a virus that is common in an animal such as a pig, bat or bird undergoes changes and passes to humans. This is likely how the new coronavirus came to be.",
      point: "20"
    },

    {
      question:
        "TRUE or FALSE? Ordering or buying products shipped from overseas will make a person sick ?",
      questionType: "text",
      questionPic: "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: ["Unknown", "False", "True"],
      correctAnswer: "1",
      submittedAnswer: "",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20"
    },

    {
      question: "Am i the best coder ?",
      questionType: "text",
      questionPic: "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values"
      ],
      correctAnswer: "2",
      submittedAnswer: "",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20"
    },

    {
      question: "Is is the best tracker online ?",
      questionType: "text",
      questionPic: "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values"
      ],
      correctAnswer: "1",
      submittedAnswer: "",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20"
    },

    {
      question: "Can i walk on the modn ?",
      questionType: "text",
      questionPic: "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values"
      ],
      correctAnswer: "2",
      submittedAnswer: "",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20"
    },

    {
      question: "Is it rainy today?",
      questionType: "text",
      questionPic: "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values"
      ],
      correctAnswer: "1",
      submittedAnswer: "",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20"
    }
  ]
};

const QuizCovid = () => {
  const [displayRecap, setDisplayRecap] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {}, [displayRecap]);
  //const [answerClicked, setAnswerClicked] = useState();

  /*
  const ClicAnswer = (index) => {
    console.log(index);
    setAnswerClicked(index);
  }; */
  return (
    <div className={styles.quiz}>
      {!displayRecap ? (
        <QuizDisplay
          quiz={quiz}
          setDisplayRecap={setDisplayRecap}
          setCorrectAnswers={setCorrectAnswers}
        />
      ) : (
        <QuizRecap quiz={quiz} correctAnswers={correctAnswers} />
      )}
    </div>
  );
};

export default QuizCovid;
