import React from 'react'
import styles from './Social.module.css'
import ImageLink from '../ImageLink'

export default function Social() {
  return (
    <div className={styles.root}>
      <p className={styles.subslogan}>Find us in social media:</p>
      <div className={styles.icons}>
        <ImageLink
          className={styles.icon}
          src="/images/icons/Facebook.svg"
          alt="social-media-icons"
          href="/"
        />
        <ImageLink
          className={styles.icon}
          src="/images/icons/Twitter.svg"
          alt="social-media-icons"
          href="/"
        />
        <ImageLink
          className={styles.icon}
          src="/images/icons/Telegram.svg"
          alt="social-media-icons"
          href="/"
        />
        <ImageLink
          className={styles.icon}
          src="/images/icons/Instagram.svg"
          alt="social-media-icons"
          href="/"
        />
      </div>
    </div>
  )
}
