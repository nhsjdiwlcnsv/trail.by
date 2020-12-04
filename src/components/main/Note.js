import React from 'react'
import styles from './Note.module.css'

export default function Note() {
    return (
        <div className={styles.root}>
            <img
                className={styles.icon}
                alt="note-icon"
                src="/images/icons/Frame.svg"
            />
            <img
                className={styles.icon}
                alt="note-icon"
                src="/images/icons/Frame-1.svg"
            />
            <img
                className={styles.icon}
                alt="note-icon"
                src="/images/icons/Frame-2.svg"
            />
            <img
                className={styles.icon + ' ' + styles.iconLake}
                alt="note-icon"
                src="/images/icons/Frame-3.svg"
            />
        </div>
    )
}
