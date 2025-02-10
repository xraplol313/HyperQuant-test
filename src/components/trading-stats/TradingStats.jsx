import React from 'react';
import styles from './TradingStats.module.css';

function TradingStats() {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>TRADING CAPITAL</h2>
			<div className={styles.content}>
				<div className={styles.leftBlock}>
					<p className={styles.totalPrice}>1.00865 BTC</p>
				</div>
				<div className={styles.rightBlock}>
					<div className={styles.infoItem}>
						<span className={styles.label}>BALANCE:</span>
						<span className={styles.value}>10 850</span>
					</div>
					<div className={styles.infoItem}>
						<span className={styles.label}>ON HOLD:</span>
                        <span className={`${styles.value} ${styles.lastValue}`}>24 000</span>
                    </div>
				</div>
			</div>
		</div>
	);
}

export default TradingStats;
