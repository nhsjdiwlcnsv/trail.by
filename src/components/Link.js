import React from 'react'
import styles from './Link.module.css'
import NextLink from 'next/link'

export default function Link({ href, children, className }) {
  return (
    <NextLink href={href}>
      <a className={styles.link + ' ' + className}>{children}</a>
    </NextLink>
  )
}
