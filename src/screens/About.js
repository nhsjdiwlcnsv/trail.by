import React from 'react';
import '../css/About.css'
import AboutInfo from "../components/AboutInfo";
import anime from 'animejs/lib/anime.es.js';


const About = () => {

    const aboutRef = React.useRef(null);
    React.useEffect(() => {
        let titleWrapper = document.querySelector('#animated-title, #animated-text');
        titleWrapper.innerHTML = titleWrapper.textContent.replace(/\S/g, "<span className='letter'>$&</span>");

        aboutRef.current =
            anime.timeline({ loop: false })
                .add({
                    targets: document.querySelectorAll('#animated-title, .letter'),
                    translateX: [50,0],
                    translateZ: 0,
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 1200,
                    delay: (el, i) => 500 + 30 * i
                })
            anime.timeline({ loop: false })
                .add({
                    targets: document.querySelectorAll('#animated-text, .letter'),
                    translateX: [-50,0],
                    translateZ: 0,
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 1600,
                    delay: (el, i) => 600 + 30 * i
                })
            anime.timeline({ loop: false })
                .add({
                    targets: document.querySelectorAll('#animated-info'),
                    translateX: [-50,0],
                    translateZ: 0,
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 1600,
                    delay: (el, i) => 600 + 30 * i
                })
    }, [])

    return (
        <div className="containerAbout">
            <div className="title-container">
                <p id="animated-title" className="animated-title">About us...</p>
            </div>
            <div className="general-info">
                <p id="animated-text" className="animated-text">
                    Trail helps you discover the world of ecotourism in Belarus. We have collected a variety of eco-trails from all over Belarus, so that everyone can find a route to their liking
                </p>
            </div>
            <div className="forest">

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
    );
}

export default About;