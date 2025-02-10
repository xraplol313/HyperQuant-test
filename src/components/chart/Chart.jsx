import { useEffect, useState } from "react";
import styles from "./Chart.module.css";

function Chart({ percent, trigger }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const generateRandomData = () => {
      const points = [];
      for (let i = 0; i < 11; i++) {
        points.push(Math.random() * 30);
      }
      return points;
    };

    setData(generateRandomData());
  }, [trigger]); 

  const dateList = [22.04, 23.04, 24.04, 25.04, 26.04];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>+ {percent}%</h2>
      <div className={styles.chart}>
        <svg width="100%" height="100%">
          {data.map((value, index, arr) => {
            if (index === 0) return null;
            return (
              <line
                key={index}
                x1={(index - 1) * 10 + "%"}
                y1={100 - arr[index - 1] + "%"}
                x2={index * 10 + "%"}
                y2={100 - value + "%"}
                stroke="#2177d1"
                strokeWidth="3"
              />
            );
          })}
        </svg>
      </div>
      <ul className={styles.dateList}>
        {dateList.map((item) => (
          <li className={styles.listItem} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chart;
