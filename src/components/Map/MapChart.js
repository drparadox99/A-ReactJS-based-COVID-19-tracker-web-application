import React, { memo } from "react";
import { useEffect, useState } from "react";
import MapQuickInfo from "./MapQuickInfo";

import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import styles from "./Map.module.css";
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent }) => {
  const [data, setData] = useState([]);
  var dict = {}; // create an empty array
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          data.forEach(
            (country) => (dict[[country.countryInfo.iso3]] = country)
          );
          setData(dict);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { ISO_A3 } = geo.properties;
                    if (data[ISO_A3] !== undefined) {
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
                      fill: "#D6D6DA",
                      outline: "none"
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
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
