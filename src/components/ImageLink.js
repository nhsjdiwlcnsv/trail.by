import React from 'react'
import Link from 'next/link'
import Anime from "react-anime";

export default function ImageLink({ href, src, alt, className, delay }) {
    return (
        <Anime
            translateY={[-15,0]}
            opacity={[0,1]}
            duration={1500}
            delay={delay}
        >
            <Link href={href}>
                <a>
                    <img className={className} alt={alt} src={src} />
                </a>
            </Link>
        </Anime>
    )
}
