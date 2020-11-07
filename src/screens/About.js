import React from 'react'
import '../css/About.css'
import AboutInfo from "../components/AboutInfo"
import { projectIntroAnimation } from "../scripts/aboutAnimations"
import scrollToTop from '../scripts/scrollToTop'
import Footer from "../navigation/Footer";
import AboutTextBG from "../media/backgrounds/AboutTextBG.svg"


const About = () => {

    projectIntroAnimation()
    scrollToTop()

    return (
        <div className="containerAbout">
            <div className="general-info">
                <p id="animated-text" className="animated-text">
                    Trail helps you discover the world of ecotourism in Belarus due to collecting a variety of ecotrails from all over the country.
                </p>
                <div className="firs">
                    <img className="firs-img" src={AboutTextBG} alt="firs"/>
                </div>
            </div>
            <div className="forest">
                <div className="all-info">
                    <div id="animated-info1">
                        <AboutInfo
                            name="Vasiliy Pupkin"
                            number="+375 29 973 79 43"
                            email="vasyapupkin@gmail.com"
                            position="top"
                        />
                    </div>
                    <div id="animated-info2">
                        <AboutInfo
                            name="Aleksey Smirnov"
                            number="+375 29 337 91 07"
                            email="asmirn@gmail.com"
                            position="middle"
                        />

                    </div>
                    <div id="animated-info3">
                        <AboutInfo
                            name="Ivan Karpovski"
                            number="+375 29 655 74 25"
                            email="karpovski@gmail.com"
                            position="down"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;