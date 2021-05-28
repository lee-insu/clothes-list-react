import React from 'react';
import styles from './header.module.css'

const Header = () => {
    return (
        <div className = {styles.header}>
            <div className={styles.logo}>오늘의코디</div>
        </div>
    )
}

export default Header;