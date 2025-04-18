import React from "react";
import styles from "./SourceCard.module.css";

const SourceCard = ({ image, title, content }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sourceCardTop}>
        <img className={styles.sourceCardImg} src={image} alt="" />
      </div>
      <div className={styles.sourceCardMiddle}>
        <h2>{title}</h2>
      </div>
      <div className={styles.sourceCardBottom}>
        <h5>{content}</h5>
      </div>
    </div>
  );
};

export default SourceCard;
