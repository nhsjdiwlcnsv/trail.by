import React, { useState } from 'react'
import styles from './Trails.module.css'
import SearchButton from "../components/trails/SearchButton";
import { IconContext } from "react-icons/"
import TrailCard from '../components/trails/TrailCard'


export default function Trails({ trails }) {

    const [query, setQuery] = useState('')
    const [realQuery, setRealQuery] = useState('')
    const realQueryRegexp = new RegExp(realQuery.toLowerCase())

    return (
        <div className={styles.root} style={{"--height-after": 4 + 'px'}}>
            <div className={styles.centered}>
                <div className={styles.searchTrails}>
                    <input
                        className={styles.search}
                        type="text"
                        value={query}
                        placeholder="Start searching!"
                        maxLength="20"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <SearchButton size={'2.5em'} onClick={() => setRealQuery(query)} />
                </div>
                <p className={!realQuery ? styles.header : styles.headerSmall}>
                    {!realQuery ? 'All ecotrails' : 'Here\'s what we found on request '}
                    <span className={styles.marked}>{!realQuery ? '' : realQuery}</span>
                </p>
                <div className={styles.results}>
                    {trails
                        .filter((e) => realQueryRegexp.test(e.title.toLowerCase()))
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
