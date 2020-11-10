import React, { useMemo } from 'react'
import styles from './Elnya.module.css'
import Note from './Note'

const paths = [
  'polygon(12% 0%, 1% 27%, 11% 70%, 2% 84%, 27% 100%, 62% 91%, 68% 100%, 98% 63%, 100% 14%, 76% 0%);',
  'polygon(0 0, 8% 30%, 0 47%, 8% 91%, 27% 100%, 62% 91%, 85% 100%, 96% 67%, 100% 0, 76% 0%, 34% 5%);',
  'polygon(7% 3%, 0 24%, 8% 50%, 6% 97%, 23% 88%, 52% 100%, 97% 93%, 90% 67%, 93% 21%, 74% 7%, 34% 5%);',
  'polygon(5% 11%, 0 25%, 3% 94%, 6% 100%, 52% 100%, 97% 93%, 95% 61%, 96% 3%, 77% 9%, 46% 4%);'
]

const path = paths[Math.floor(Math.random() * 4)]
console.log(path)
export default function Elnya() {
  const today = new Date()
  const date = `${today.getFullYear()}.${
    today.getMonth() + 1
  }.${today.getDate()}`

  return (
    <div className={styles.root}>
      <div className={styles.brief}>
        <p className={styles.release}>
          Meet <span className={styles.marked}>Elnya</span>
        </p>
        <p className={styles.date}>{date}</p>
      </div>
      <div className={styles.intro}>
        <p>
          <span className={styles.subTitle}>Elnya</span> is called one of the
          biggest lungs of Europe and is very old - 9000 y.o. Its pure air, vast
          mires views, endless cranberries plantations and fragrance - all worth
          coming for 3 hours. Highly recommended for nature lovers!
        </p>
        <div className={styles.image}>
          <img
            src="/images/ecotrails/Elnya/Elnya1.jpg"
            style={{
              clipPath: path
            }}
          />
        </div>
      </div>
      <Note />
    </div>
  )
}
