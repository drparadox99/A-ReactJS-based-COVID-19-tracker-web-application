import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import numeral from "numeral";
import { fetchDailyData } from "../../api";

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  // Similaire à componentDidMount et componentDidUpdate
  //useEffect cant be async so we create an async inside in order to call await function
  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  //displaying a barchart for a specific country
  const barchart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(255,0,0,0.5)"
            ],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value
            ]
          }
        ]
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `'Current state in ${country}'` }
      }}
    />
  ) : null;

  //the same thing as before
  //when it initially loads data wont be loaded at first
  //so when the daily data is available we return the line chart else we return null
  //We count have used if
  //doest load the chart if the data is not yet fetched

  const lineChart =
    dailyData !== undefined ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map((data) => data.confirmed),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true
            },
            {
              data: dailyData.map((data) => data.deaths),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              fill: true
            }
          ]
        }}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  //include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    return numeral(value).format("0,0");
                  }
                }
              }
            ]
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("0,0");
              }
            }
          }
        }}
      />
    ) : null;

  return (
    <div className={styles.container}>{country ? barchart : lineChart}</div>
  );
};

export default Chart;
