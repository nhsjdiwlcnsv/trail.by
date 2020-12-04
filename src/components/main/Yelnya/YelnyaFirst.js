import styles from "./YelnyaFirst.module.css";
import React from "react";
import Link from "../../Link";


export default function YelnyaFirst() {

    return (
        <div className={styles.general} style={{"--height-after": 6 + 'px'}}>
            <p className={styles.generalTitle}>What is Yelnya?</p>
            <p className={styles.generalText}>
                <span className={styles.marked}>Yelnya</span> is called one of the
                biggest lungs of Europe and is very old - 9000 y.o. Its pure air, vast
                mires views, endless cranberries plantations and fragrance - all worth
                coming for 3 hours. Highly recommended for nature lovers!
            </p>
            <div className={styles.seeMoreLink}>
                <Link href="#gallery">See photos</Link>
            </div>
            <div>
                <svg
                    width="667"
                    height="576"
                    viewBox="0 0 667 576"
                    className={styles.clippedImg}
                >
                    <g>
                        <path
                            d="M80.5 321.888C35.7 346.688 31 396.721 30 418.387C30 429.554 31.7 459.887 72.5 493.887C148.1 557.487 225 548.721 254 536.387L260.5 534.387C278.333 528.554 323.7 518.787 362.5 526.387C411 535.887 428.5 531.387 461 526.387C493.5 521.387 647 456.887 636 310.387C608.5 47.8874 361.78 21.2777 305 31.885C259.5 40.385 207.167 59.8876 186.5 78.3876C160.1 107.588 171.833 145.554 181 160.888C183 164.888 191.7 173.888 196.5 187.888C216 267.888 136.5 290.888 80.5 321.888Z"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d"
                            x="0"
                            y="0"
                            filterUnits="userSpaceOnUse"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 150 0"
                            />
                            <feOffset/>
                            <feGaussianBlur stdDeviation="15"/>
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                            />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        <pattern
                            id="paint1_image"
                            viewBox="0 0 1 1"
                            height="1"
                            width="1"
                            patternContentUnits="objectBoundingBox"
                            preserveAspectRatio="xMidYMid slice"
                        >
                            <image
                                width="1"
                                height="1"
                                href="/images/ecotrails/Yelnya/IMG_20200726_133749.jpg"
                                preserveAspectRatio="xMidYMid slice"
                            />
                        </pattern>
                    </defs>
                </svg>
            </div>
        </div>
    )
}