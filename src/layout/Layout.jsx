import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../layout/layout.module.css'
const Layout = ({children}) => {
    return (
        <div>
            <Header />
                <div className={styles.layout}>
                    {children}
                </div>
            <Footer />
        </div>
    );
};

export default Layout;