import React from "react";
import styles from "./News.module.css";

//https://www.gouvernement.fr/info-coronavirus?xtor=SEC-3-GOO-[]-[425080454104]-S-[coronavirus%20maladie]
const News = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}> Coronavirus 101 </h1>
      <div className={styles.section}>
        <div className={styles.section_1}>
          <h2 className={styles.title}> What is coronavirus and COVID-19 ? </h2>
          <div className={styles.text}>
            <p>
              {" "}
              The name "coronavirus" is derived from Latin corona, meaning
              "crown" or "wreath", itself a borrowing from Greek κορώνη korṓnē,
              "garland, wreath.
            </p>
            <br />
            <p>
              {" "}
              Coronaviruses are a large family of viruses which may cause
              illness in animals or humans. In humans, several coronaviruses are
              known to cause respiratory infections ranging from the common cold
              to more severe diseases such as Middle East Respiratory Syndrome
              (MERS) and Severe Acute Respiratory Syndrome (SARS). The most
              recently discovered coronavirus causes coronavirus disease
              COVID-19.
            </p>
            <br />
            <p>
              {" "}
              COVID-19 is the infectious disease caused by the most recently
              discovered coronavirus. This new virus and disease were unknown
              before the outbreak began in Wuhan, China, in December 2019.
              COVID-19 is now a pandemic affecting many countries globally.
            </p>
          </div>
        </div>
        <div className={styles.section_2}>
          <h2 className={styles.title}>How does COVID-19 spread ?</h2>
          <div className={styles.text}>
            <p>
              {" "}
              The disease spreads primarily from person to person through small
              droplets from the nose or mouth, which are expelled when a person
              with COVID-19 coughs, sneezes, or speaks. These droplets are
              relatively heavy, do not travel far and quickly sink to the
              ground. People can catch COVID-19 if they breathe in these
              droplets from a person infected with the virus.{" "}
            </p>
            <p>
              {" "}
              These droplets can land on objects and surfaces around the person
              such as tables, doorknobs and handrails. People can become
              infected by touching these objects or surfaces, then touching
              their eyes, nose or mouth.
            </p>
            <p> </p>
          </div>
        </div>
        <div className={styles.section_4}>
          <h2 className={styles.title}> How to protected myself ? </h2>
          <div className={styles.text}>
            <p>
              {" "}
              The most effective ways to protect yourself and others against
              COVID-19 are to:
              <br />
              &nbsp; * &nbsp; Wear a mask when in public
              <br />
              &nbsp; * &nbsp; Clean your hands frequently and thoroughly
              <br />
              &nbsp; * &nbsp; Avoid touching your eyes, mouth and nose
              <br />
              &nbsp; * &nbsp; Cover your cough with the bend of elbow or tissue.
              If a tissue is used, discard it immediately and wash your hands.
              <br />
              &nbsp; * &nbsp; Maintain a distance of at least 1 metre from
              others.
            </p>
          </div>
        </div>
        <div className={styles.section_4}>
          <h2 className={styles.title}> Symptoms </h2>
          <div className={styles.text}>
            <p>
              {" "}
              The most common symptoms of COVID-19 are fever, dry cough, and
              tiredness. Other symptoms that are less common and may affect some
              patients include aches and pains, nasal congestion, headache,
              conjunctivitis, sore throat, diarrhea, loss of taste or smell or a
              rash on skin or discoloration of fingers or toes. These symptoms
              are usually mild and begin gradually. Some people become infected
              but only have very mild symptoms.
            </p>
          </div>
        </div>
        <div className={styles.section_3}>
          <div className={styles.section_5}>
            <h2 className={styles.title}> Once infected, what's next </h2>
            <div className={styles.text}>
              <p>
                If you have been in close contact with someone with COVID-19,
                you may be infected. Close contact means that you live with or
                have been in settings of less than 1 metre from those who have
                the disease. In these cases, it is best to stay at home
              </p>
              <p>
                If you become ill, even with very mild symptoms you must
                self-isolate
              </p>
              <p>
                Even if you don’t think you have been exposed to COVID-19 but
                develop symptoms, then self-isolate and monitor yourself
              </p>
              <p>
                You are more likely to infect others in the early stages of the
                disease when you just have mild symptoms, therefore early
                self-isolation is very important
              </p>
              <p>
                If you do not have symptoms, but have been exposed to an
                infected person, self-quarantine for 14 days
              </p>
              <p>
                <strong>Note : </strong>
                If you have definitely had COVID-19 (confirmed by a test)
                self-isolate for 14 days even after symptoms have disappeared as
                a precautionary measure – it is not yet known exactly how long
                people remain infectious after they have recovered. Follow
                national advice on self-isolation
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section_6}>
          <h2 className={styles.title}> Vaccine </h2>
          <div className={styles.text}>
            While some western, traditional or home remedies may provide comfort
            and alleviate symptoms of mild COVID-19, there are no medicines that
            have been shown to prevent or cure the disease. WHO does not
            recommend self-medication with any medicines, including antibiotics,
            as a prevention or cure for COVID-19. However, there are several
            ongoing clinical trials of both western and traditional medicines.
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
