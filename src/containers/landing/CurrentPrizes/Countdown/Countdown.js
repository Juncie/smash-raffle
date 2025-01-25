import React, { useState, useEffect, useMemo } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import styles from "./styles.module.scss";

dayjs.extend(duration);

const emptyTimer = { d: "00", h: "00", m: "00", s: "00" };
const pad = (n) => (n < 10 ? "0" + n : n);

const Countdown = ({ end, onEnd }) => {
  const [components, setComponents] = useState({ ...emptyTimer });

  // Memoize effectiveEndDate to prevent unnecessary re-evaluations
  const effectiveEndDate = useMemo(() => {
    if (end) return dayjs(end); // Use the provided end date
    return dayjs().endOf("month"); // Default to the last day of the month
  }, [end]);

  const checkTime = (e) => {
    let secondsUntilEnd = dayjs(e).diff(dayjs(), "second");

    if (secondsUntilEnd <= 0) {
      onEnd?.();
      return emptyTimer;
    }

    const duration = dayjs.duration(secondsUntilEnd, "seconds");
    let days = Math.floor(duration.asDays());
    let hours = duration.hours();
    let minutes = duration.minutes();
    let remainingSeconds = duration.seconds();

    return {
      d: pad(days),
      h: pad(hours),
      m: pad(minutes),
      s: pad(remainingSeconds),
    };
  };

  useEffect(() => {
    setComponents(checkTime(effectiveEndDate));

    const interval = setInterval(() => {
      setComponents(checkTime(effectiveEndDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [effectiveEndDate]); // Dependency array contains the stable `effectiveEndDate`

  return (
    <div className={styles.timer}>
      <div className={`${styles.timerComponent} fade-up`}>
        <div className={styles.timerContent}>
          <span className="text-font28 leading-[30px]">{components.d}</span>
          <span className="text-font8">DAY</span>
        </div>
      </div>
      <div className={`${styles.timerComponent} fade-up`}>
        <div className={styles.timerContent}>
          <span className="text-font28 leading-[30px]">{components.h}</span>
          <span className="text-font8">HOUR</span>
        </div>
      </div>
      <div className={`${styles.timerComponent} fade-up`}>
        <div className={styles.timerContent}>
          <span className="text-font28 leading-[30px]">{components.m}</span>
          <span className="text-font8">MIN</span>
        </div>
      </div>
      <div className={`${styles.timerComponent} fade-up`}>
        <div className={styles.timerContent}>
          <span className="text-font28 leading-[30px]">{components.s}</span>
          <span className="text-font8">SEC</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
