import React from "react";
import styles from '../css/Footer.module.css'


const Footer = () => {
    return (
        <div className={styles.footer}>
            <svg
                width="1600"
                height="336"
                viewBox="0 0 1600 320"
                fill="none"
            >
                <path
                    d="M648.333 336H0V55.9322L70.4167 147.733L323.333 55.9322L550.833 86.8264L1018.75 18.9933L1257.92 86.8264L1600 0V336H1185H901.667H648.333Z"
                    fill="#00BC71"
                />
            </svg>
            <p className={styles.firstLine}>Designed by Mikhail Shkarubski</p>
            <p className={styles.secondLine}>For HSE Global Scholarship Competition</p>
        </div>
    )
}


export default Footer
