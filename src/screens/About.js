import React from 'react';
import '../css/About.css'
import AboutInfo from "../components/AboutInfo";
import anime from 'animejs/lib/anime.es.js';


const About = () => {

    const aboutRef = React.useRef(null);
    React.useEffect(() => {
        let textWrapper = document.querySelector('#title');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span className='letter'>$&</span>");

        aboutRef.current =
            anime.timeline({ loop: false })
                .add({
                    targets: document.querySelectorAll('#title, .letter'),
                    translateX: [50,0],
                    translateZ: 0,
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 1200,
                    delay: (el, i) => 500 + 30 * i
                })
    }, [])

    return (
        <div className="containerAbout">
            <div className="title-container">
                <p id="title">About us...</p>
            </div>
            <div className="forest">
                <AboutInfo
                    name="Vasiliy Pupkin"
                    number="+375 29 973 79 43"
                    email="vasyapupkin@gmail.com"
                    position="top"
                />
                <AboutInfo
                    name="Aleksey Smirnov"
                    number="+375 29 337 91 07"
                    email="asmirn@gmail.com"
                    position="middle"
                />
                <AboutInfo
                    name="Ivan Karpovski"
                    number="+375 29 655 74 25"
                    email="karpovski@gmail.com"
                    position="down"
                />
            </div>
        </div>
    );
}

export default About;