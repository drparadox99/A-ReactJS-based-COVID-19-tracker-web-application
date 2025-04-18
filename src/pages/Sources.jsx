import React from "react";
import styles from "./Sources.module.css";
import google from "../images/google.png";
import marianne from "../images/marianne.png";
import virus from "../images/virus.png";
import wikipedia from "../images/wikipedia.png";

import SourceCard from "../components/SourceCard/SourceCard";
const Sources = (props) => {
  const content =
    " The World Health Organization is a specialized agency of the United Nations responsible for international public health. It is part of the U.N. Sustainable Development Group";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sources</h1>
      <div className={styles.sourcesCards}>
        <SourceCard
          image={virus}
          title={"Disease.sh"}
          content={content}
          link={"https://disease.sh/"}
        />
        <SourceCard
          image={google}
          title={"Google"}
          content={content}
          link={"https://www.google.com/"}
        />
        <SourceCard
          image={wikipedia}
          title={"Wikipedia"}
          content={content}
          link={"https://fr.wikipedia.org/"}
        />
        <SourceCard
          image={"https://cov19.cc/assets/img/news_sources/jhu.png"}
          title={"Flaticon"}
          content={content}
          link={"https://www.flaticon.com/"}
        />
        <SourceCard
          image={"https://cov19.cc/assets/img/news_sources/jhu.png"}
          title={"cov19.cc"}
          content={content}
          link={"https://cov19.cc/"}
        />
        <SourceCard
          image={"https://cov19.cc/assets/img/news_sources/jhu.png"}
          title={"Johns Hopkins University"}
          content={content}
          link={"https://coronavirus.jhu.edu/"}
        />
      </div>
    </div>
  );
};

export default Sources;
