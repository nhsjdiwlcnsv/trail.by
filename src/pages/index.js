import React from 'react'
import styles from './Index.module.css'
import Greeting from '../components/main/Greeting'
import Yelnya from '../components/main/Yelnya/Yelnya'
import BlueLakes from '../components/main/BlueLakes'
import Gallery from "../components/main/Gallery";


export default function Home() {
    return (
        <div className={styles.container}>
            <title>Home - Trail</title>
            <Greeting />
            <Yelnya />
            <BlueLakes />
            <Gallery />
        </div>
    )
}
