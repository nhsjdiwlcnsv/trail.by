import React from 'react';
import styles from '../css/QuickSearch.module.css'
import Link from "next/link";

const QuickSearch = ({title, link}) => {

    return (
        <Link className={styles.link} href={link} >
            <div className={styles.tag}>
                <p className={styles.text}>{title}</p>
            </div>
        </Link>
    )
}

export default QuickSearch;