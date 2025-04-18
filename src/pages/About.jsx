import React from "react";
import styles from "./About.module.css";
import Avatar from "react-avatar";
import profil_img from "../images/mask.png";

//"Icon made by Pixel perfect from www.flaticon.com"
const About = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <div className={styles.imageSection}>
          <Avatar
            src={profil_img}
            name="Foo Bar"
            round={true}
            size="150"
            className={styles.profil_icon}
          />
        </div>
        <div className={styles.nameSection}>Kostas AIWANSEDO</div>
        <div className={styles.jobSection}>Computer Science Student</div>
        <div className={styles.infoSection}>
          Hi, my name is kostas AIWANSEDO, i'm a greek-born, french-educated
          computer science student living in France. I built this tool as a side
          projet, hoping it would provide a way for people to track the spread
          of coronavius all around the world. I spent almost two months working
          relentlessly on the project and did a lot of research while doing so.
          I hope this tool helps contextualize the spread of the coronavirus on
          a global scale, educate and inform people during the COVID-19
          pandeminc.
        </div>
        <div className={styles.infoSectionNote}> Note : BLM !</div>
        <div className={styles.contactSection}>
          Email: konstas.aiwansedo@gmail.com
        </div>
      </div>
    </div>
  );
};

export default About;
