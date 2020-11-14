import React from 'react'
import styles from './Link.module.css'
import NextLink from 'next/link'
import Anime from "react-anime";

export default function Link({ href, children, className, delay }) {
    return (
        <Anime
            translateY={[-15,0]}
            opacity={[0,1]}
            duration={1500}
            delay={delay}
        >
            <NextLink href={href}>
                <a className={styles.link + ' ' + className}>{children}</a>
            </NextLink>
        </Anime>
    )
}
