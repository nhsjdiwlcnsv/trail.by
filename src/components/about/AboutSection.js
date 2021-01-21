import React from 'react'
import styles from './AboutSection.module.css'


export default function AboutSection ({title, text}) {
    return (
        <div className={styles.section}>
            <h1 className={styles.sectionTitle}>{title}</h1>
            <p className={styles.sectionContent}>{text}</p>
        </div>
    )
}