import React from 'react';
import styles from './Preloader.module.css'

const Preloader=(props)=>{
    return(
        <><hr/>
    <div className={styles.container}>

        <div className={styles.swing}>
            <div className={styles.swing_l}></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className={styles.swing_r}></div>
        </div>
        <div className={styles.shadow}>
            <div className={styles.shadow_l}></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className={styles.shadow_r}></div>
        </div>
    </div></>
    )
};

export default Preloader;