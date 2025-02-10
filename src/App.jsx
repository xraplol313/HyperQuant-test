import { useState } from "react";
import styles from "./App.module.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TradingStats from "./components/trading-stats/TradingStats";
import TimeRange from "./components/time-range/TimeRange";
import BotCard from "./components/bot-card/BotCard";
import Chart from "./components/chart/Chart";

function App() {
  const [percent, setPercent] = useState(null); 
  const [chartTrigger, setChartTrigger] = useState(true); 

  const handlePercentChange = (newPercent) => {
    setPercent(newPercent); 
  };

  const handleBotClick = () => {
    setChartTrigger((prevTrigger) => !prevTrigger);
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <TradingStats />
      <Chart percent={percent} trigger={chartTrigger} /> 
      <BotCard onBotClick={handleBotClick} /> 
      <TimeRange onPercentChange={handlePercentChange} />
      <Footer />
    </div>
  );
}

export default App;
