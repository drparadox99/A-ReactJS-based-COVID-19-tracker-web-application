import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import styles from "./LineGraph.module.css";

//Configuration du LineGraph
const options = {
  legend: {
    display: true
  },
  elements: {
    point: {
      radius: 0
    }
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      }
    }
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll"
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: false
        },
        ticks: {
          //include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0,0");
          }
        }
      }
    ]
  }
};

//gets the news cases by substacting each date from the previous one
//End up with an array of daily news cases
//the function also calculate the daily new recovers and deaths by specifying the correspondant object as a parameter
//by default the fuction returns a object of the increase of new cases
//CaseType can be either recovered, deaths or cases
const buildChartData = (data, casesType) => {
  const chartData = [];
  let lastDataPoint;
  //for each case
  for (let date in data.timeline.cases) {
    if (lastDataPoint) {
      //getting the news cases by substracting today's cases from yesterday's cases
      let newDataPoint = {
        x: date,
        y: data.timeline[casesType][date] - lastDataPoint
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data.timeline[casesType][date];
  }
  return chartData;
};

//pour avoir le graph du monde
// const chartData = [];
// let lastDataPoint;
// //for each case
// for (let date in data.cases) {
//   if (lastDataPoint) {
//     //getting the news cases by substracting today's cases from yesterday's cases
//     let newDataPoint = {
//       x: date,
//       y: data.[casesType][date] - lastDataPoint
//     };
//     chartData.push(newDataPoint);
//   }
//   lastDataPoint = data.[casesType][date];
// }
// return chartData;
// };

//https://disease.sh/v3/covid-19/historical/all?last=120
function LineGraph({ casesType, country, continentSelected }) {
  const [data, setData] = useState({});
  let countrySelected = country;
  if (continentSelected === "France") countrySelected = "France";
  if (continentSelected === "USA") countrySelected = "Usa";

  //const countrySelected = country;

  const url = `https://disease.sh/v3/covid-19/historical/${countrySelected}?last=120`;
  //in order to use asynchrounous function inside a useEffect function u need to do this
  //cause the wrapper function of an asychrounous function also needs to be asynchronous but we can't make useEffect asunchrounous
  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          let chartData = buildChartData(data, casesType);
          setData(chartData);
        });
    };

    fetchData();
  }, [casesType]);

  return (
    <div className={styles.app__graph}>
      {data?.length > 0 && (
        <Line
          options={options}
          data={{
            datasets: [
              {
                backgroundColor: "rgba(207,16,52,0.1)",
                borderColor: "#CC1034",
                data: data
              }
            ]
          }}
        />
      )}
    </div>
  );
}

export default LineGraph;
