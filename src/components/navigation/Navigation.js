import React, { useContext } from 'react'
import Link from '../Link'
import ImageLink from '../ImageLink'
import styles from './Navigation.module.css'
import { ThemeContext } from '../../theme'

const Navigation = () => {
  const theme = useContext(ThemeContext)

  return (
    <div className={styles.root}>
      <div>
        <ImageLink
          href="/"
          alt="logo"
          src={
            theme.name === 'light'
              ? '/images/logo/Logo.svg'
              : '/images/logo/LogoBlack.svg'
          }
          className={styles.logo}
        />
      </div>
      <div className={styles.item}>
        <Link href="/contact">Contact</Link>
      </div>
      <div className={styles.item}>
        <Link href="/about">About us</Link>
      </div>
      <div className={styles.item}>
        <Link href="/trails">All trails</Link>
      </div>
    </div>
  )
}

export default Navigation
