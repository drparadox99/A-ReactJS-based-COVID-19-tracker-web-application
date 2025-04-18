import React, { useState } from "react";
import styles from "./GeoBoard.module.css";
import { Card, CardContent } from "@material-ui/core";
import {} from "../../api";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { FaGlobeEurope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { Container, Row, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";

const GeoBoard = ({ detecterGeoClick }) => {
  const [clic, setClic] = useState("world");

  const useStyles = makeStyles((theme) => ({
    btn: {
      "&:hover": {
        border: "1mm ridge #1E8449",
        borderRadius: "20px",
        color: "#ebffeb !important"
      },
      fontFamily: "Open Sans",
      letterSpacing: "0.2rem",
      color: "#ebffeb",
      fontWeight: "bold",
      fontSize: "1.5rem"
    },
    effetClic: {
      color: "green ",
      border: "1mm ridge #1E8449",
      borderRadius: "20px"
    }
  }));
  const classes = useStyles();

  const setClicEffet = (selection, continentSelected = selection) => {
    detecterGeoClick(selection, continentSelected);
    setClic(selection);
  };

  return (
    <Container fluid className={styles.card}>
      <Row>
        <Col
          lg="auto"
          onClick={(e) => setClicEffet("countries")}
          className={`${classes.btn}  ${
            clic === "countries" && classes.effetClic
          }  `}
        >
          <FaGlobe className={classes.btn} /> World
        </Col>
        <Col
          lg="auto"
          onClick={(e) => setClicEffet("Africa")}
          className={`${classes.btn}  ${
            clic === "Africa" && classes.effetClic
          }  `}
        >
          <FaGlobeAfrica className={classes.btn} /> Africa
        </Col>
        <Col
          lg="auto"
          onClick={(e) => setClicEffet("South America")}
          className={`${classes.btn}  ${
            clic === "South America" && classes.effetClic
          }  `}
        >
          <FaGlobeAmericas className={classes.btn} /> South America
        </Col>
        <Col
          lg="auto"
          onClick={(e) => setClicEffet("Europe")}
          className={`${classes.btn}  ${
            clic === "Europe" && classes.effetClic
          }  `}
        >
          <FaGlobeEurope className={classes.btn} /> Europe
        </Col>
        <Col
          lg="auto"
          onClick={(e) => setClicEffet("Asia")}
          className={`${classes.btn}  ${
            clic === "Asia" && classes.effetClic
          }  `}
        >
          <FaGlobeAsia className={classes.btn} /> Asia
        </Col>
        <Col
          lg="auto"
          onClick={(e) => setClicEffet("Australia/Oceania")}
          className={`${classes.btn} ${
            clic === "Australia/Oceania" && classes.effetClic
          }  `}
        >
          <GiEarthAsiaOceania className={classes.btn} /> Australia/Oceania
        </Col>
      </Row>

      <Row>
        <Col
          lg="auto"
          onClick={(e) => setClicEffet("North America")}
          className={`${classes.btn}  ${styles.topBuffer}  ${
            clic === "North America" && classes.effetClic
          }  `}
        >
          <FaGlobeAmericas className={classes.btn} /> North America
        </Col>
        <Col
          lg="auto"
          onClick={(e) => setClicEffet("states", "USA")}
          className={`${classes.btn}  ${styles.topBuffer}  ${
            clic === "states" && classes.effetClic
          }  `}
        >
          <FaGlobe className={classes.btn} /> United States
        </Col>

        <Col
          lg="auto"
          onClick={(e) => setClicEffet("France", "France")}
          className={`${classes.btn}  ${styles.topBuffer}  ${
            clic === "France" && classes.effetClic
          }  `}
        >
          <FaGlobe className={classes.btn} /> France
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(GeoBoard);
