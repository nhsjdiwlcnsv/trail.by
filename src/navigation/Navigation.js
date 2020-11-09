import React, {useContext, useState} from 'react';
import Link from 'next/link';
import styles from '../css/Navigation.module.css'
import { ThemeContext } from "../pages/_app";


const Navigation = () => {

    const theme = useContext(ThemeContext)

    return (
        <div className={styles.nav}>
            <div id="nav-logo">
                <Link href="/">
                    <img
                        className={styles.logo}
                        alt="logo"
                        src={theme.name === "light" ? '/images/logo/Logo.svg' : '/images/logo/LogoBlack.svg'}
                    />
                </Link>
            </div>
            <div id="nav-item" className={styles.navItem}>
                <Link className={styles.link} href="/contact">
                    <a className={styles.link}>Contact</a>
                </Link>
            </div>
            <div id="nav-item" className={styles.navItem}>
                <Link href="/about">
                    <a className={styles.link}>About us</a>
                </Link>
            </div>
            <div id="nav-item" className={styles.navItem}>
                <Link href="/trails">
                    <a className={styles.link}>All trails</a>
                </Link>
            </div>
        </div>
    )
}

export default Navigation;