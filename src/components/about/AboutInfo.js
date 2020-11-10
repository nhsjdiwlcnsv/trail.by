import React from 'react'
import styles from './AboutInfo.module.css'

export default function AboutInfo({ name, position, number, email }) {
  return (
    <div className={styles.infoСontainer + position}>
      <p className={styles.name}>{name}</p>
      <div className={styles.section}>
        <p className={styles.header}>Phone number</p>
        <p className={styles.number}>{number}</p>
      </div>
      <div className={styles.section}>
        <p className={styles.header}>Email</p>
        <p className={styles.email}>{email}</p>
      </div>
    </div>
  )
}