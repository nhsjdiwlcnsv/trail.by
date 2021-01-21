import React from 'react'
import styles from './BlueLakes.module.css'
import Link from '../Link'
import { Carousel } from 'react-responsive-carousel'


export default function BlueLakes() {
    return (
        <div className={styles.root} id="blue-lakes" style={{"--height-after": 12 + 'px'}}>
            <h1 className={styles.text}>Blue lakes</h1>
            <div className={styles.brief}>
                <div className={styles.description}>
                    <p>
                        Ecological trail Blue Lakes
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
                        infiniteLoop
                        showThumbs={false}
                        showArrows={false}
                        showIndicators={false}
                        showStatus={false}
                    >
                        <div>
                            <img alt="Blue Lakes 1" src="/images/ecotrails/BlueLakes/BlueLakes1.jpg" />
                        </div>
                        <div>
                            <img alt="Blue Lakes 2" src="/images/ecotrails/BlueLakes/BlueLakes2.jpg" />
                        </div>
                        <div>
                            <img alt="Blue Lakes 3" src="/images/ecotrails/BlueLakes/BlueLakes3.jpg" />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className={styles.linkContainer}>
                <Link href="/trail/blue-lakes" className={styles.more}>See more</Link>
            </div>
        </div>
    )
}
