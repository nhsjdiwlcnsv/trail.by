import React, { useEffect, useState } from 'react'
import styles from './Tag.module.css'
import Link from 'next/link'


export default function Tag({ title, link, animationDelay }) {
  // const [animated, setAnimated] = useState(false)
  // useEffect(()=>{
  //   setTimeout(()=>setAnimated(true), animationDelay * 1000 + 100)
  // }, [])

  return (
      <Link href={link}>
        <div
          className={styles.tag}
          data-aos="fade-up"
          data-aos-delay={animationDelay}
        >
          <p className={styles.text}>{title}</p>
        </div>
      </Link>
  )
}
