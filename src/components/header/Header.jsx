import styles from './Header.module.css'
import refreshIcon from '../../assets/images/refresh-img.png'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <button className={styles.menu}></button>
                <h1 className={styles.headerTitle}>Dashboard</h1>
                <div className={styles.refreshBtn}>
                    <img className={styles.refreshIcon} src={refreshIcon} alt="Refresh Icon" />
                </div>
            </div>
      </header>
    )
  }
  
  export default Header
