import React from "react";
import styles from "./Quiz.module.css";
import { Quizz } from "../components";

const Quiz = (props) => {
  return (
    <div className={styles.container}>
      <Quizz />
    </div>
  );
};

export default Quiz;
