import React from 'react'
import styles from './AboutTeam.module.css'
import Anime from "react-anime";

export default function AboutTeam() {
    return (
        <div className={styles.aboutTeamContainer }>
            <p className={styles.aboutTeamText}>
                Trail helps you discover the world of ecotourism in Belarus due to collecting a variety of ecotrails from all over the country.
            </p>
            <div className="firs">
                <Anime>
                    <img className="firs-img" src='/images/backgrounds/AboutTextBG.svg' alt="firs"/>
                </Anime>
            </div>
        </div>
    )
}