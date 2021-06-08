import React from 'react';
import {useHistory} from 'react-router-dom';
import styles from './header.module.css'

const Header = () => {

    const history = useHistory();

    return (
        <div className = {styles.header}>
            <div className={styles.logo} onClick={()=> history.push('/')} >oh Co!</div>
            <ul className={styles.ul}>
                <li onClick={() => history.push('/recruit')}>CREW RECRUiT</li>
                <li>LIKE</li>
                <li>LIKE</li>
                <li>LIKE</li>
                <li>LIKE</li>
               
            </ul>
        </div>

    )
}

export default Header;