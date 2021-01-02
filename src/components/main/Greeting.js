import React from 'react'
import styles from './Greeting.module.css'
import Tag from './Tag'
import Anime from "react-anime";
import Typing from "react-typing-animation"


export default function Greeting() {
    return (
        <div className={styles.root}>
            <div className={styles.title}>
                <Typing speed={100}>
                    Explore Belarusian nature with us.
                </Typing>
            </div>
            <div className={styles.hint}>
                <Anime
                    opacity={[0,1]}
                    translateX={[-50,0]}
                    duration={3000}
                    delay={4200}
                >
                    <p className={styles.hintTitle}>Go to:</p>
                </Anime>
                <Tag title="#Yelnya" link="/#elnya" delay={4400}/>
                <Tag title="#Blue lakes" link="/#blue-lakes" delay={4500}/>
                <Tag title="#Galleries" link="/#galleries" delay={4600}/>
            </div>
        </div>
    )
}
