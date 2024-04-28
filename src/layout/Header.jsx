import React from 'react';
import logo from '../public/divar.svg'
import { CiLocationOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom'
import styles from './header.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.right_header}>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <div className={styles.location}>
                    <CiLocationOn />
                    <span>تهران</span>
                </div>
            </div>
            <div className={styles.left_header}>
                <div className={styles.logo}>
                    <FaRegUser />
                    <Link to="/auth">دیوار من</Link>
                </div>
                <Link to="/dashboard"><button className={styles.btn}>ثبت آگهی</button></Link>
            </div>
        </div>
    );
};

export default Header;