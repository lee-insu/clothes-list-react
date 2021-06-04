import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './loading.module.css';



const LoadingSpinner = () => {
    
    return(
        <div className = {styles.loading}>
            <Loader 
                type="Oval"
                color="#F0F0EB"
                height={50}
                width={50}
                timeout={3000}
                
        />

        <img src="./flower1.jpg" alt=""/>
        </div>

    )
}

export default LoadingSpinner;