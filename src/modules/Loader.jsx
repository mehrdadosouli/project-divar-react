import React from 'react';
import styles from '../modules/Loader.module.css'
const Loader = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.child}></div>
            <div className={styles.child2}></div>
        </div>
    );
};

export default Loader;