import React from 'react'
import styles from './AboutSection.module.css'


export default function AboutSection ({title, text}) {
    return (
        <div className={styles.section}>
            <p className={styles.sectionTitle}>{title}</p>
            <p className={styles.sectionContent}>{text}</p>
        </div>
    )
}