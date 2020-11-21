    import React from 'react'
import styles from './Mail.module.css'
import Link from '../Link'

export default function Mail() {
  return (
    <div className={styles.root}>
      <p className={styles.subslogan}>Or contact us via email:</p>
      <Link href="mailto:contact@trail.com" className={styles.mail}>
        contact@trails.com
      </Link>
    </div>
  )
}