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
                timeout={1800}
                
        />
        </div>

    )
}

export default LoadingSpinner;