import React from "react";
import styles from '../css/TrailCard.module.css'
import Link from "next/link"


const TrailCard = props => {

    let [title] = React.useState(props.title)
    let [region] = React.useState(props.region)
    let [type] = React.useState(props.type)
    let [distance] = React.useState(props.distance)
    let [background] = React.useState(props.background)
    let [trailName] = React.useState(props.trailName)

    return (
        <div className={styles.card}>
            <div className={styles.topBackground}>
                <img className={styles.topBackgroundImg} alt="background" src={background}/>
                <div className={styles.titleContainer}>
                    <p className={styles.title}>{title}</p>
                </div>
            </div>
            <div className={styles.bottomContent}>
                <div className={styles.params}>
                    <div className={styles.paramSection}>
                        <p className={styles.paramTitle}>Region</p>
                        <p className={styles.paramValue} id="region">{region}</p>
                    </div>
                    <div className={styles.paramSection}>
                        <p className={styles.paramTitle}>Type</p>
                        <p className={styles.paramValue} style={{color: type === "Forest" ? "#00BC71" : "#8BBC00"}}>
                            {type}
                        </p>
                    </div>
                    <div className={styles.paramSection}>
                        <p className={styles.paramTitle}>Distance</p>
                        <p className={styles.paramValue} id="distance">{distance}</p>
                    </div>
                </div>
                <div className={styles.seeMoreLink}>
                    <Link className="seeMoreCard" href={`/ecotrail/${trailName}`}>
                        See more
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default TrailCard