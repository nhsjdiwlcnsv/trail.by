import React from "react";
import styles from './AboutInfo.module.css'


export default function AboutInfo({ name, number, email, color }) {

    return (
        <div className={styles.infoContainer}>
            {
                color === 'green' ?
                    <img src='/images/backgrounds/firGreen.png' className={styles.imageCard} />
                    :
                    <img src='/images/backgrounds/firRed.png' className={styles.imageCard} />
            }
            <p className={styles.name} style={{color: color === "green" ? "#00BC71" : "#E77B54"}}>{name}</p>
            <div className={styles.topSection}>
                <p className={styles.header}>Phone number</p>
                <p className={styles.number}>{number}</p>
            </div>
            <div className={styles.section}>
                <p className={styles.header}>Email</p>
                <p className={styles.email}>{email}</p>
            </div>
        </div>
    )
}