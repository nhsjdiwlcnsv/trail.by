import React from 'react'
import styles from './Index.module.css'
import Greeting from '../components/main/Greeting'
import Elnya from '../components/main/Elnya'
import BlueLakes from '../components/main/BlueLakes'


export default function Home() {
  return (
    <div className={styles.container}>
      <Greeting />
      <Elnya />
      <BlueLakes />
    </div>
  )
}
