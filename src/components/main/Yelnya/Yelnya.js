import React from 'react'
import styles from './Yelnya.module.css'
import Note from '../Note'
import YelnyaFirst from "./YelnyaFirst";
import YelnyaSecond from "./YelnyaSecond";
import Link from "../../Link";


export default function Yelnya() {

    const today = new Date()
    const date = `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}`

    return (
        <div className={styles.root} style={{"--height-after": 12 + 'px'}} id="yelnya">
            <p className={styles.release}>Meet Yelnya!</p>
            <p className={styles.date}>{date}</p>
            <Note />
            <YelnyaFirst />
            <YelnyaSecond />
            <div className={styles.linkContainer}>
                <Link href="/trail/yelnya" className={styles.more}>See more</Link>
            </div>
        </div>
    )
}
