import React from 'react'
import styles from './About.module.css'
import AboutInfo from '../components/about/AboutInfo'
import AboutTeam from "../components/about/AboutTeam";
import AboutSection from "../components/about/AboutSection";


export default function About() {

    return (
        <div className={styles.containerAbout}>
            <title>About us - Trail</title>
            <AboutTeam />
            <div className={styles.ourTeamContainer}>
                <p className={styles.ourTeam}>Our team</p>
                <div className={styles.teamCards}>
                    <AboutInfo
                        name="Vasiliy Pupkin"
                        number="+375 29 655 74 25"
                        email="vasyapupkin@gmail.com"
                        color="green"
                    />
                    <AboutInfo
                        name="Maxim Ramanovski"
                        number="+375 29 973 79 43"
                        email="maximmaster@gmail.com"
                        color="red"
                    />
                    <AboutInfo
                        name="Aleksey Smirnov"
                        number="+375 29 337 91 07"
                        email="asmirn@gmail.com"
                        color="green"
                    />
                </div>
            </div>
            <AboutSection
                title="How do we work?"
                text={
                    <p>
                        Trail is based on the experience of the other people, so if you want to make a contribution,
                        don’t be afraid to contact any of our employee and provide him with information that you know.
                        It can be a new ecotrail, different rotes in already know to us ecotrail, etc.
                        <br/>
                        <br/>
                        <span className={styles.marked}>You are always welcome! :)</span>
                    </p>
                }
            />
            <AboutSection
                title="When did we start?"
                text={
                    <p>
                        The original idea to create a resource that will show tourists belarusian nature was born
                        in <span className={styles.marked}>2017</span>, when belarusian ecotourism was even less popular the now.
                        We were absolutely disagreed with this underestimation of the beauty of our nature and soon,
                        in <span className={styles.marked}>2018</span> we created a team that works on this project
                        till this day and constantly supplements and improves it.
                     </p>
                }
            />
        </div>
    )
}
