import React from "react";
import CountUp from "react-countup";

const MapQuickInfo = ({ styles, data, ISO_A3 }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.divImage}>
        <img
          className={styles.popupImage}
          src={data[ISO_A3].countryInfo.flag}
          alt="Avatar"
        />
      </div>
      <div className={styles.countryName}>{data[ISO_A3].country}</div>

      <div className="">
        <div className={styles.popupText}>
          <span className={styles.titles}> Confirmed </span>{" "}
          <span className={styles.fleches1}> ==> </span>{" "}
          <span className={styles.confirmed_data}>
            <CountUp
              start={0}
              end={data[ISO_A3].cases}
              duration={2.5}
              separator=","
            />
          </span>
        </div>
        <div className={styles.popupText}>
          <span className={styles.titles}> Deceased </span>{" "}
          <span className={styles.fleches2}> ==> </span>{" "}
          <span className={styles.deceased_data}>
            {" "}
            <CountUp
              start={0}
              end={data[ISO_A3].deaths}
              duration={2.5}
              separator=","
            />
          </span>
        </div>
        <div className={styles.popupText}>
          <span className={styles.titles}> Recovered </span>{" "}
          <span className={styles.fleches3}> ==> </span>{" "}
          <span className={styles.recovered_data}>
            <CountUp
              start={0}
              end={data[ISO_A3].recovered}
              duration={2.5}
              separator=","
            />
          </span>
        </div>
        <div className={styles.popupText}>
          <span className={styles.titles}> Active </span>{" "}
          <span className={styles.fleches4}> ==> </span>{" "}
          <span className={styles.active_data}>
            <CountUp
              start={0}
              end={data[ISO_A3].active}
              duration={2.5}
              separator=","
            />
          </span>
        </div>
        <div className={styles.popupText}>
          <span className={styles.titles}> Critical </span>{" "}
          <span className={styles.fleches5}> ==> </span>{" "}
          <span className={styles.critical_data}>
            <CountUp
              start={0}
              end={data[ISO_A3].critical}
              duration={2.5}
              separator=","
            />
          </span>
        </div>
        <div className={styles.popupText}>
          <span className={styles.titles}> Population </span>{" "}
          <span className={styles.fleches7}> ==> </span>{" "}
          <span className={styles.population}>
            <CountUp
              start={0}
              end={data[ISO_A3].population}
              duration={2.5}
              separator=","
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MapQuickInfo;
