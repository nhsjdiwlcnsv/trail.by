import React from 'react';
import '../css/About.css'
import AboutInfo from "../components/AboutInfo";


const About = () => {
    return (
        <div className="containerAbout">
            <div className="title">
                <p>About us...</p>
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