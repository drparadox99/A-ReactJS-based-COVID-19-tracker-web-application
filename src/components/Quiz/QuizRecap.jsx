import React, { useState } from "react";
import styles from "./QuizRecap.module.css";
import { Button } from "@material-ui/core";

const QuizRecapBody = ({ recap }) => {
  return (
    <div className={styles.container}>
      <div className={styles.quizRecapTitle}>
        <h2>Q1: {recap.question}</h2>
      </div>
      <div className={styles.quizRecapImg}>
        <img className={styles.quizRecapPic} src={recap.questionPic} alt="" />
      </div>
      <div className={styles.QuizRecapVerifs}>
        {recap.answers.map((answer, key) => (
          <Button
            className={`${styles.QuizRecapVerif} 
            ${
              recap.submittedAnswer === key.toString() &&
              recap.submittedAnswer !== recap.correctAnswer &&
              styles.quizRecapVerifFalse
            } 
            ${
              recap.correctAnswer === key.toString() &&
              styles.quizRecapVerifTrue
            }  
               `}
            variant="contained"
            href="#contained-buttons"
            key={key}
          >
            {answer}
          </Button>
        ))}
      </div>
      <div className={styles.quizRecapInfo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </div>
    </div>
  );
};

const QuizRecap = ({ quiz, correctAnswers }) => {
  const quizBody = quiz.questions.map((recap, key) => (
    <QuizRecapBody recap={recap} key={key} />
  ));

  return (
    <>
      <div className={styles.quizRecapHeader}>
        <h2>
          You have completed the quiz. You got {correctAnswers} out of
          {" " + quiz.questions.length + " "}
          questions
        </h2>
      </div>
      {quizBody}
    </>
  );
};
export default QuizRecap;
