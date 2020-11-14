import React from 'react'
import styles from './Note.module.css'
import Link from '../Link'

export default function Note() {
    return (
        <div className={styles.root}>
            <p className={styles.sign}>Note</p>
            <p className={styles.text}>
                Here you can find both coniferous trees (pines, for instance), and
                deciduous species, such as birches. Also here are some small lakes and
                ponds, that are separated by some swamp vegetation.
            </p>
            <div className={styles.icons}>
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
            <div className={styles.more}>
                <Link href="/trail/elnya">
                    See more...
                </Link>
            </div>
        </div>
    )
}
