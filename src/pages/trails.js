import React, { useState } from 'react'
import styles from './Trails.module.css'
import TrailCard from '../components/trails/TrailCard'

export default function Trails({ trails }) {
  const [query, setQuery] = useState('')
  const queryRegexp = new RegExp(query.toLowerCase())
  console.log(queryRegexp)

  return (
    <div className={styles.containerTrails}>
      <div className={styles.containerCentered}>
        <div className={styles.searchTrails}>
          <div className={styles.searchContainer}>
            <input
              className={styles.search}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.results}>
          {trails
            .filter((e) => queryRegexp.test(e.title.toLowerCase()))
            .map((trail) => (
              <TrailCard
                title={trail.title}
                region={trail.region}
                type={trail.type}
                distance={trail.distance}
                background={trail.background}
                trailName={trail.key}
                key={trail.key}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  let trails = (await import('../../data/trails.json')).default
  trails = Object.entries(trails)
  trails = trails.map(([key, trail]) => ({
    key,
    title: trail.title,
    region: trail.region,
    type: trail.type,
    distance: trail.distance,
    background: trail.background
  }))

  return {
    props: {
      trails
    }
  }
}
