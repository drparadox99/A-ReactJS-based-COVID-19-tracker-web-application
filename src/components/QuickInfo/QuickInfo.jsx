import React, { useState, useEffect } from "react";
import styles from "./QuickInfo.module.css";
import { Card, Typography, CardContent } from "@material-ui/core";
import CountUp from "react-countup";
import Tooltip from "@material-ui/core/Tooltip";

import img_0 from "../../images/8.png";
import img_1 from "../../images/12.png";
import img_2 from "../../images/18.png";
import img_3 from "../../images/20.png";
import img_4 from "../../images/3.png";
import img_5 from "../../images/17.png";
import img_6 from "../../images/13.jpg";
import img_7 from "../../images/21.png";
import img_8 from "../../images/11.png";
import img_9 from "../../images/19.png";

const QuickInfo = ({ dataQuickInfo }) => {
  const [data, setData] = useState([]);
  const status = [
    "Confirmed",
    "Deceased",
    "Recovered",
    "Active",
    "Critical",
    "Tests",
    "Today's Cases",
    "Today's Death",
    "Daily Recovery"
  ];
  const quickInfoTile = "Quick Corona Info";

  const images = [
    img_1,
    img_2,
    img_3,
    img_4,
    img_5,
    img_6,
    img_7,
    img_8,
    img_9
  ];
  const colors = [
    "#ff3860",
    "#0ee9cb",
    "#F35353",
    "#347fd5",
    "#ffeb00",
    "#ffc137",
    "#ff8a37",
    "#fb3958",
    "#4875B4",
    "#B7B7B7",
    "#6772e5",
    "#0ee9cb"
  ];

  //retourne un h1 coloré
  const RainBowNumber = ({ colorIndice, row }) => {
    function getObjetColore(colorIndice) {
      return {
        color: colors[colorIndice]
      };
    }

    return (
      <>
        <h1 style={getObjetColore(colorIndice)}>
          <CountUp start={0} end={row} duration={2.5} separator="," />{" "}
        </h1>
      </>
    );
  };

  useEffect(() => {
    setData(dataQuickInfo);
  }, [dataQuickInfo]);

  return (
    <div className={styles.cardOuterLayer}>
      <Card className={styles.cardInnerLayer}>
        <CardContent>
          <div className={styles.title}> Quick Info </div>
          <Tooltip
            title={
              <span
                style={{
                  fontFamily: "Open-Sans",
                  fontSize: "22px",
                  color: "#d8ffd8"
                }}
              >
                {quickInfoTile}
              </span>
            }
          >
            <img className={styles.images} src={img_0} alt="Coronavirus Info" />
          </Tooltip>

          {data.length
            ? data.map((row, key) => (
              <div key={key}>
                <RainBowNumber colorIndice={key} row={row} key={key} />
                <Tooltip
                  title={
                    <span
                      style={{
                        fontFamily: "Open-Sans",
                        fontSize: "22px",
                        color: "#d8ffd8"
                      }}
                    >
                      {status[key]}
                    </span>
                  }
                >
                  <img
                    className={styles.images}
                    src={images[key]}
                    alt="Coronavirus Info"
                  />
                </Tooltip>
              </div>
            ))
            : "No Availbable Data"}
        </CardContent>
      </Card>
    </div>
  );
};

export default React.memo(QuickInfo);
