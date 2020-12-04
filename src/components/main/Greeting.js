import React from 'react'
import styles from './Greeting.module.css'
import Tag from './Tag'
import Anime from "react-anime";

export default function Greeting() {
    return (
        <div className={styles.root}>
            <div>
                <Anime
                    translateY={[-50, 0]}
                    opacity={[0, 1]}
                    duration={3000}
                    delay={400}
                >
                    <div className={styles.title}>
                        Welcome to <span className={styles.marked}>Trail</span>!
                    </div>
                </Anime>
            </div>
            <div className={styles.hint}>
                <Anime
                    opacity={[0,1]}
                    translateX={[-50,0]}
                    duration={3000}
                    delay={2500}
                >
                    <p className={styles.hintTitle}>Go to:</p>
                </Anime>
                <Tag title="Yelnya" link="/#elnya" delay={2700}/>
                <Tag title="Blue lakes" link="/#blue-lakes" delay={2800}/>
                <Tag title="Galleries" link="/#galleries" delay={2900}/>
            </div>
        </div>
    )
}
