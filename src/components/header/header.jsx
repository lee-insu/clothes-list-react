import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import styles from './header.module.css'

const Header = () => {

    const history = useHistory();
    const [windowWidth,setWindowWidth] = useState();

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }


    useEffect(()=> {
        window.addEventListener('resize',handleResize);
        return () => {
            window.removeEventListener('resize',handleResize);
        }
    },[])
    return (
        <div className = {styles.header}>
            <div className={styles.logo} onClick={()=> history.push('/')} >oh Co!</div>
            <ul className={styles.ul}>
                {windowWidth < 480 || window.innerWidth < 480 ? 
                <li onClick={() => history.push('/recruit')}>RECRUiT </li>:
                <li onClick={() => history.push('/recruit')}>CREW RECRUiT</li>
             }   
            </ul>
        </div>

    )
}

export default Header;