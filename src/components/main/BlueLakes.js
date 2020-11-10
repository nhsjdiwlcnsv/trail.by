import React from 'react'
import styles from './BlueLakes.module.css'
import Link from '../Link'
import { Carousel } from 'react-responsive-carousel'

export default function BlueLakes() {
  return (
    <div className={styles.root}>
      <p className={styles.text}>
        We also recommend you visiting{' '}
        <span className={styles.marked}>Blue Lakes</span>:
      </p>
      <div className={styles.brief}>
        <div className={styles.description}>
          <p>
            <span className={styles.title}>
              Ecological trail "
              <span className={styles.marked}>Blue Lakes</span>"
            </span>
            <br />
            <br />
            is located on the territory of the Narochansky National Park in the
            Myadel district, 500 m beyond the village of Olshevo.
            <br />
            <br />
            Each time you come to this amazing place, you will discover
            something new, this is a unique hilly-lake complex with vast
            forests, an abundance of springs and truly unique lakes.
          </p>
        </div>
        <div className={styles.carousel}>
          <Carousel
            autoPlay
            // dynamicHeight
            infiniteLoop
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
          >
            <div>
              <img src="/images/ecotrails/BlueLakes/BlueLakes1.jpg" />
            </div>
            <div>
              <img src="/images/ecotrails/BlueLakes/BlueLakes2.jpg" />
            </div>
            <div>
              <img src="/images/ecotrails/BlueLakes/BlueLakes3.jpg" />
            </div>
          </Carousel>
        </div>
      </div>
      <div style={{height: '40%'}}></div>
      <Link href="/ecotrail/blue-lakes" className={styles.seeMore}>
        See more...
      </Link>
    </div>
  )
}
