import { useState } from 'react';
import styles from './BotCard.module.css';

import blackBot from '../../assets/images/black-bot.png';
import orangeBot from '../../assets/images/orange-bot.png';
import redBot from '../../assets/images/red-bot.png';
import greenBot from '../../assets/images/green-bot.png';
import yelloyBot from '../../assets/images/yelloy-bot.png';
import blueBot from '../../assets/images/blue-bot.png';

import blueBotWave from '../../assets/images/blue-wave.png';
import redBotWave from '../../assets/images/red-wave.png';
import orangeBotWave from '../../assets/images/orange-wave.png';
import greenBotWave from '../../assets/images/green-wave.png';

function BotCard({ onBotClick }) {
    const [selectedBotId, setSelectedBotId] = useState(null);

    const botItems = [
        { id: 1, title: 'ATTACK', icon: orangeBot, wave: orangeBotWave, positionLeft: 'auto', positionRight: '-28px', positionBottom: '-22px', percent: '-8.2%', increase: false },
        { id: 2, title: 'PLACE BOT HERE', icon: blackBot, increase: false },
        { id: 3, title: 'BALANCE', icon: blueBot, wave: blueBotWave, positionLeft: '-37px', positionBottom: '-27px', percent: '-3.7%', increase: false },
        { id: 4, title: 'DEFFENCE', icon: greenBot, wave: greenBotWave, positionLeft: 'auto', positionRight: '-32px', positionBottom: 'auto', percent: '+2.5%', increase: true },
        { id: 5, title: 'MEGABOT', icon: yelloyBot, percent: '+3.6%', increase: true },
        { id: 6, title: 'ATTACK', icon: redBot, wave: redBotWave, positionLeft: '-33px', positionBottom: 'auto', percent: '+13.7%', increase: true },
    ];

    const handleCardClick = (id) => {
        setSelectedBotId(id);
        onBotClick(id);
    };

    return (
        <div className={styles.wrapper}>
            {botItems.map((bot) => (
                <div
                    key={bot.id}
                    className={`${styles.botCard} ${bot.percent ? '' : styles.disabled} ${selectedBotId === bot.id ? styles.selected : ''}`}
                    onClick={() => handleCardClick(bot.id)}
                >
                    <img src={bot.icon} alt={bot.title} className={styles.botIcon} />
                    <h2 className={styles.botTitle}>{bot.title}</h2>
                    <p className={`${styles.botPercent} ${bot.increase ? styles.colorGreen : styles.colorRed}`}>{bot.percent || ''}</p>
                    {bot.wave && (
                        <img
                            src={bot.wave}
                            alt={bot.title}
                            className={styles.botImg}
                            style={{
                                left: bot.positionLeft,
                                bottom: bot.positionBottom,
                                right: bot.positionRight,
                            }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

export default BotCard;
