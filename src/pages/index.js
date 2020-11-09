import React from 'react'
import styles from '../css/Home.module.css'
import Link from 'next/link'
import QuickSearch from '../components/QuickSearch'
import path from '../scripts/paths'
import date from '../scripts/getDate'
import { greetingAndHintAnimation, quickSearchAnimation } from '../scripts/homeAnimations'
import Footer from "../navigation/Footer";
import carousel from "../scripts/carousel"


const Home = () => {

    greetingAndHintAnimation()
    quickSearchAnimation()
    carousel()

    return (
        <div className={styles.containerHome}>
            <div className={styles.greeting}>
                <div className="greeting-animated">
                    <p className={styles.greetingText} id="greeting">Welcome to <span className={styles.spanTitle}>Trail</span>!</p>
                </div>
                <div className={styles.hint}>
                    <p id="animated-hint" className={styles.hintText}>Go to:</p>
                    <div className="animated-search1"><QuickSearch title="Elnya" link="/#elnya"/></div>
                    <div className="animated-search2"><QuickSearch title="Blue lakes" link="/#bluelakes"/></div>
                    <div className="animated-search3"><QuickSearch title="Galleries" link="/#galleries"/></div>
                </div>
            </div>
            <div className={styles.latest} id="elnya">
                <div className={styles.titleBrief}>
                    <p className={styles.latestRelease}>Meet <span className={styles.spanTitle}>Elnya</span></p>
                    <p className={styles.latestDate}>{date()}</p>
                </div>
                <div className={styles.intro}>
                    <p><span className={styles.spanTitle}>Elnya</span> is called one of the biggest lungs of Europe and is very old - 9000 y.o. Its pure air, vast mires views, endless cranberries plantations and fragrance - all worth coming for 3 hours. Highly recommended for nature lovers!</p>
                    <svg
                        width="827.5"
                        height="644.85"
                        viewBox="0 0 827.5 644.85"
                    >
                        <defs>
                            <pattern
                                id="pattern"
                                height="100%"
                                width="100%"
                            >
                                <image href='/images/ecotrails/Elnya/Elnya1.jpg'/>
                            </pattern>
                        </defs>
                        <path d={path()} fill="url(#pattern)"/>
                    </svg>
                </div>
                <div className={styles.note}>
                    <p className={styles.noteSign}>Note</p>
                    <p className={styles.noteText}>Here you can find both coniferous trees (pines, for instance), and deciduous species, such as birches. Also here are some small lakes and ponds, that are separated by some swamp vegetation.</p>
                    <div className={styles.noteIcons}>
                        <img className={styles.noteIcon} alt="note-icon" src='/images/icons/Frame.svg'/>
                        <img className={styles.noteIcon} alt="note-icon" src='/images/icons/Frame-1.svg'/>
                        <img className={styles.noteIcon} alt="note-icon" src='/images/icons/Frame-2.svg'/>
                        <img className={styles.noteIcon + ' ' + styles.noteIconLake} alt="note-icon" src='/images/icons/Frame-3.svg'/>
                    </div>
                    <div className={styles.more}>
                        <Link href="/ecotrail/elnya" className={styles.seeMore}>See more...</Link>
                    </div>
                </div>
            </div>
            <div className={styles.recommended} id="bluelakes">
                <p className={styles.recommendedText}>We also recommend you visiting <span className={styles.spanTitle}>Blue Lakes</span>:</p>
                <div className={styles.recommendedBrief}>
                    <div className={styles.description}>
                        <p>
                            <span className={styles.dark}>Ecological trail "<span className={styles.spanTitle}>Blue Lakes</span>"</span>
                            <br/>
                            <br/>
                            is located on the territory of the Narochansky National Park in the Myadel district, 500 m beyond the village of Olshevo.
                            <br/>
                            <br/>
                            Each time you come to this amazing place, you will discover something new, this is a unique hilly-lake complex with vast forests, an abundance of springs and truly unique lakes.
                        </p>
                    </div>
                    <div className={styles.carousel}>
                        <div className={styles.carouselItem}>
                            <img className={styles.carouselImage} id="slide" alt="slide"/>
                        </div>
                    </div>
                    <div className={styles.more}>
                        <Link href="/ecotrail/blue-lakes" className={styles.seeMore}>See more...</Link>
                    </div>
                </div>
            </div>
            <div className={styles.recommended2} id="galleries">
                <p className={styles.recommended2Text}><span className={styles.spanTitle}>Galleries</span> are in progress...</p>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
