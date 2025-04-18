import React, { useState } from "react";
import styles from "./QuizDisplay.module.css";
import { Button } from "@material-ui/core";

const QuizDisplay = ({ quiz, setDisplayRecap, setCorrectAnswers }) => {
  //the index of the current question
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //get the index of the clicked answer
  const [answerClicked, setAnswerClicked] = useState();
  //display next question button
  const [displayNextQuestion, setDisplayNextQuestion] = useState(false);

  //save the clicked answer
  const ClicAnswer = (index) => {
    setDisplayNextQuestion(true);
    setAnswerClicked(index);
  };
  //display next question
  const displayNext = () => {
    //quiz.questions[currentQuestion].submittedAnswer = answerClicked.toString();
    if (
      answerClicked.toString() === quiz.questions[currentQuestion].correctAnswer
    ) {
      setCorrectAnswers((previousValue) => previousValue + 1);
    }
    setAnswerClicked("");
    setDisplayNextQuestion(false);
    if (currentQuestion === quiz.questions.length - 1) {
      setDisplayRecap(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className={styles.quiz}>
      <div className={styles.questionBlock}>
        <div className={styles.question_number}>
          Question {currentQuestion}:
        </div>
        <div className={styles.questionTitle}>
          <h3>{quiz.questions[currentQuestion].question}</h3>
        </div>
      </div>
      <div className={styles.questionImageBloc}>
        <img
          className={styles.questionImage}
          src="https://dummyimage.com/600x400/000/fff&text=X"
          alt=""
        />
      </div>
      <div className={styles.questionAnswers}>
        {quiz.questions[currentQuestion].answers.map((response, key) => (
          <Button
            onClick={() => ClicAnswer(key)}
            className={`${styles.questionAnswer} ${
              answerClicked === key && styles.questionAnswerActive
            } `}
            variant="contained"
            key={key}
          >
            {response}
          </Button>
        ))}
      </div>
      {displayNextQuestion && (
        <div className={styles.questionButton}>
          <Button
            onClick={() => displayNext()}
            variant="contained"
            color="primary"
            href="#contained-buttons"
          >
            Suivant
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuizDisplay;
