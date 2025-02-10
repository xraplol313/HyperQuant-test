import { useState } from 'react';
import styles from './Footer.module.css';
import dashboardLogo from '../../assets/images/dashboard-logo.png';
import megaLogo from '../../assets/images/megabot-logo.png';
import coinPricesLogo from '../../assets/images/coin-prices-logo.png';
import profileLogo from '../../assets/images/profile-logo.png';
import botMarketLogo from '../../assets/images/bot-market-logo.png';

function Footer() {
    const menuItems = [
        { name: 'Dashboard', icon: dashboardLogo },
        { name: 'Megabot', icon: megaLogo },
        { name: 'Bot market', icon: botMarketLogo },
        { name: 'Coin prices', icon: coinPricesLogo },
        { name: 'Profile', icon: profileLogo, notification: 3 },
    ];

    const [activeItem, setActiveItem] = useState(menuItems[0].name);

    const handleItemClick = (name) => {
        setActiveItem(name);
    };

    return (
        <footer className={styles.footer}>
            {menuItems.map((item) => {
                const isActive = activeItem === item.name;
                return (
                    <div
                        key={item.name}
                        className={`${styles.menuItem} ${isActive ? styles.active : ''} ${
                            item.name === 'Profile' ? styles.profileMenu : ''
                        }`}
                        onClick={() => handleItemClick(item.name)}
                    >
                        <img
                            src={item.icon}
                            alt={item.name}
                            className={styles.icon}
                        />
                        <span className={styles.text}>{item.name}</span>
                        {item.notification && (
                            <div className={styles.notification}>
                                {item.notification}
                            </div>
                        )}
                    </div>
                );
            })}
        </footer>
    );
}

export default Footer;
