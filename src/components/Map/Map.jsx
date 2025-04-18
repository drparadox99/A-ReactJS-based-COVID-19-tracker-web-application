import React, { useState, useEffect } from "react";
import styles from "./Map.module.css";
import ReactTooltip from "react-tooltip";

//import React, { memo } from "react";
//pour le composant MapChart
import MapQuickInfo from "./MapQuickInfo";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { trier } from "../../utils/utils";
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const shadesGreen = [
  "#1E8449",
  "#229954",
  "#27AE60",
  "#52BE80",
  "#7DCEA0",
  "#A9DBA6",
  "#A9DFBF",
  "#b1ffb1",
  "#c4ffc4",
  "#d8ffd8",
  "#BDEDBA",
  "#C7F3D8",
  "#CFF3DD",
  "#ebffeb"



];
const shadesBlue = [
  "#1F618D",
  "#2874A6",
  "#2E86C1",
  "#3498DB",
  "#5DADE2",
  "#85C1E9",
  "#AED6F1",
  "#D6EAF8",
  "#EDF3F7",
  "#52A4C9",
  "#84C3E0",
  "#80C1DE",
  "#ACDDF2",
  "#97CFE9"
];

//151, 207, 233

//Attribution des couleurs sur la carte en fontion cas confirmer
function attribuerCouleur(critere) {
  let indiceCouleur = 0;
  if (critere >= 5000000) {
    indiceCouleur = 0;
  } else if (critere >= 3500000) {
    indiceCouleur = 1;
  } else if (critere >= 2000000) {
    indiceCouleur = 2;
  } else if (critere >= 900000) {
    indiceCouleur = 3;
  } else if (critere >= 200000) {
    indiceCouleur = 4;
  } else if (critere >= 100000) {
    indiceCouleur = 5;
  } else if (critere >= 50000) {
    indiceCouleur = 6;
  } else if (critere >= 25000) {
    indiceCouleur = 7;
  } else if (critere > 15000) {
    indiceCouleur = 8;
  } else if (critere > 10000) {
    indiceCouleur = 9;
  } else if (critere > 9000) {
    indiceCouleur = 10;
  } else if (critere > 6000) {
    indiceCouleur = 11;
  } else if (critere > 3000) {
    indiceCouleur = 12;
  } else {
    indiceCouleur = 13;
  }

  return shadesGreen[indiceCouleur];
}

const MapChart = ({ setTooltipContent }) => {
  const [data, setData] = useState([]);


  useEffect(() => {
    var dict = {}; // create an empty array
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const dataTrie = trier(data, "cases", "decroissant");
          dataTrie.forEach((country, key) => {
            dict[[country.countryInfo.iso3]] = country;
            dict[[country.countryInfo.iso3]].mapColor = attribuerCouleur(
              dict[[country.countryInfo.iso3]].confirmed
            );
          });
          setData(dict);
          // console.log(triColorer(dict));
        });
    };
    fetchData();
  }, []);


  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={
                  data[geo.properties.ISO_A3] !== undefined
                    ? attribuerCouleur(data[geo.properties.ISO_A3].cases)
                    : "white"
                }
                onMouseEnter={() => {
                  const { ISO_A3 } = geo.properties;
                  //console.log(data[geo.properties.ISO_A3].cases);
                  if (data[ISO_A3] !== undefined) {
                    //console.log(data[ISO_A3]);
                    setTooltipContent(
                      <MapQuickInfo
                        styles={styles}
                        data={data}
                        ISO_A3={ISO_A3}
                      />
                    );
                  } else {
                    setTooltipContent("Unkwown");
                  }
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    outline: "none",
                    strokeWidth: 40
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none"
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none"
                  }
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

const Map = () => {
  const [content, setContent] = useState("");
  return (
    <div className={styles.mapBackground}>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip backgroundColor="none">{content}</ReactTooltip>
    </div>
  );
};
export default Map;
