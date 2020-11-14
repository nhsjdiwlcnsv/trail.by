import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.firstLine}>Designed by Mikhail Shkarubski</p>
            <p className={styles.secondLine}>For HSE Global Scholarship Competition</p>
        </div>
    )
}

export default Footer
