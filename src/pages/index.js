import React from 'react'
import styles from './Index.module.css'
import Greeting from '../components/main/Greeting'
import Yelnya from '../components/main/Yelnya/Yelnya'
import BlueLakes from '../components/main/BlueLakes'


export default function Home() {
    return (
        <div className={styles.container}>
            <Greeting />
            <Yelnya />
            <BlueLakes />
        </div>
    )
}
