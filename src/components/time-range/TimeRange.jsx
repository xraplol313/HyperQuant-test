import { useState, useEffect } from 'react';

import styles from './TimeRange.module.css';
import data from '../../assets/data/data.min.json';

function TimeRange({ onPercentChange }) {
  const timeRanges = ['24h', '7 days', '30 days', 'All time'];
  const keyMapping = {
    '24h': '24h',
    '7 days': '7d',
    '30 days': '30d',
    'All time': 'all_time',
  };

  const savedRange = localStorage.getItem('activeRange') || 'All time';
  const [activeRange, setActiveRange] = useState(savedRange);
  const activeBot = data.bots.find((bot) => bot[keyMapping[activeRange]] !== undefined);

  useEffect(() => {
    localStorage.setItem('activeRange', activeRange);
    if (activeBot) {
      onPercentChange(activeBot[keyMapping[activeRange]]);
    }
  }, [activeRange]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Time Range:</div>
      <div className={styles.items}>
        {timeRanges.map((range) => (
          <button
            key={range}
            className={`${styles.buttonItem} ${
              activeRange === range ? styles.active : ''
            }`}
            onClick={() => setActiveRange(range)}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TimeRange;
