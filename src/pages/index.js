import React from 'react'
import styles from './Index.module.css'
import { Carousel } from 'react-responsive-carousel'
import Greeting from '../components/main/Greeting'
import Elnya from '../components/main/Elnya'
import BlueLakes from '../components/main/BlueLakes'

let galery = [
  '/images/ecotrails/Elnya/IMG_20200726_133148.jpg',
  '/images/ecotrails/Elnya/IMG_20200726_140456.jpg',
  '/images/ecotrails/Elnya/IMG_20200726_233123.jpg',
  '/images/ecotrails/Elnya/IMG_20200726_340603.jpg',
  '/images/ecotrails/Elnya/IMG_20200726_133749.jpg',
  '/images/ecotrails/Elnya/IMG_20200726_135321.jpg',
  '/images/ecotrails/Elnya/IMG_20200726_131647.jpg',
  '/images/ecotrails/Elnya/Elnya1.jpg',
  '/images/ecotrails/Elnya/IMG_20200726_140411.jpg',
  '/images/ecotrails/Bielakorac/IMG_20200712_120907.jpg',
  '/images/ecotrails/Bielakorac/derevo-u-ekotropy-belokorecz-768x1155.jpg',
  '/images/ecotrails/Bielakorac/IMG_20200426_145034.jpg',
  '/images/ecotrails/Bielakorac/IMG_20200426_145613.jpg',
  '/images/ecotrails/Bielakorac/vid-na-reku-s-ekotropy-2-1024x681.jpg',
  '/images/ecotrails/Bielakorac/Naliboki-3.jpg',
  '/images/ecotrails/SvyatyeKrinitsi/296A5392.jpg',
  '/images/ecotrails/SvyatyeKrinitsi/296A3844.jpg',
  '/images/ecotrails/SvyatyeKrinitsi/5d8db85a19e81-1-4.jpg',
  '/images/ecotrails/SvyatyeKrinitsi/296A5513.jpg',
  '/images/ecotrails/OlmanskieSwapms/ельня-62_ клюква.jpg',
  '/images/ecotrails/OlmanskieSwapms/IMG_20191102_113352.jpg',
  '/images/ecotrails/OlmanskieSwapms/IMG_20190713_124148.jpg',
  '/images/ecotrails/OlmanskieSwapms/a10.jpg',
  '/images/ecotrails/OlmanskieSwapms/IMG_20200726_133749.jpg',
  '/images/ecotrails/OlmanskieSwapms/IMG_20200620_130352.jpg',
  '/images/ecotrails/BlueLakes/BlueLakes7.jpg',
  '/images/ecotrails/BlueLakes/BlueLakes3.jpg',
  '/images/ecotrails/BlueLakes/BlueLakes6.jpg',
  '/images/ecotrails/BlueLakes/BlueLakes8.jpg',
  '/images/ecotrails/BlueLakes/BlueLakes2.jpg'
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Greeting />
      <Elnya />
      <BlueLakes />
      <div className={styles.text}>
        Check out some images from our ecotrails
              </div>
      <Carousel
        className={styles.carousel}
        dynamicHeight
        dynamicWidth
        showThumbs={false}
        infiniteLoop
        autoPlay
      >
        {galery.map((e) => (
          <div
            style={{
              maxHeight: '400px'
            }}
          >
            <img
              src={e}
              styles={{
                maxWidth: '100%',
                maxHeight: '100%'
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
