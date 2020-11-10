import React from 'react'
import styles from './Greeting.module.css'
import Tag from './Tag'

export default function Greeting() {
  return (
    <div className={styles.root}>
      <div>
        <div className={styles.title} data-aos="fade-down" data-aos-delay="400">
          Welcome to <span className={styles.marked}>Trail</span>!
        </div>
      </div>
      <div className={styles.hint}>
        <p
          className={styles.hintTitle}
          data-aos="fade-down"
          data-aos-delay="800"
        >
          Go to:
        </p>
        <Tag title="Elnya" link="/#elnya" animationDelay={1200} />
        <Tag title="Blue lakes" link="/#bluelakes" animationDelay={1600} />
        <Tag title="Galleries" link="/#galleries" animationDelay={2000} />
      </div>
    </div>
  )
}
