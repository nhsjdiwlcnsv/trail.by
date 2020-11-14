import React, { useEffect, useState } from 'react'
import styles from './Tag.module.css'
import Link from 'next/link'
import Anime from "react-anime";


export default function Tag({ title, link, delay }) {
    return (
        <Anime
            opacity={[0,1]}
            translateY={[50,0]}
            duration={3000}
            delay={delay}
        >
            <Link href={link}>
                <div className={styles.tag}>
                    <p className={styles.text}>{title}</p>
                </div>
            </Link>
        </Anime>
    )
}
