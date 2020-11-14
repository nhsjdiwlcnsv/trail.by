import React, { useMemo } from 'react'
import styles from './Elnya.module.css'
import Note from './Note'

const paths = [
  'polygon(22% 0, 0% 18%, 10% 33%, 0 62%, 12% 100%, 28% 89%, 50% 100%, 94% 93%, 100% 56%, 100% 0%, 68% 9%)',
  'polygon(0 18%, 10% 48%, 2% 72%, 12% 95%, 37% 98%, 58% 86%, 74% 97%, 97% 85%, 88% 55%, 100% 49%, 89% 8%, 43% 0%, 28% 12%)',
  'polygon(13% 11%, 46% 0, 100% 10%, 90% 47%, 100% 72%, 80% 93%, 63% 81%, 45% 100%, 15% 93%, 2% 43%)',
  'polygon(40% 3%, 100% 0, 100% 72%, 91% 91%, 54% 82%, 42% 100%, 17% 93%, 0 33%)'
]

const path = paths[Math.floor(Math.random() * 4)]
console.log(path)

export default function Elnya() {

      const today = new Date()
      const date = `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}`

      return (
          <div className={styles.root} style={{"--height-after": 12 + 'px'}} id="elnya">
              <div className={styles.brief}>
                  <p className={styles.release}>Meet <span className={styles.marked}>Elnya</span>!</p>
                  <p className={styles.date}>{date}</p>
              </div>
              <div className={styles.intro}>
                  <p>
                      <span className={styles.marked}>Elnya</span> is called one of the
                      biggest lungs of Europe and is very old - 9000 y.o. Its pure air, vast
                      mires views, endless cranberries plantations and fragrance - all worth
                      coming for 3 hours. Highly recommended for nature lovers!
                  </p>
                  <div className={styles.image}>
                      <img
                          src="/images/ecotrails/Elnya/Elnya1.jpg"
                          style={{clipPath: path}}
                      />
                  </div>
              </div>
              <Note />
          </div>
      )
    }
