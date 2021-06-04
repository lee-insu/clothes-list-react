import React from 'react';
import styles from './header.module.css'

const Header = () => {
    return (
        <div className = {styles.header}>
            <div className={styles.logo}>oh Co!</div>
        </div>
    )
}

export default Header;