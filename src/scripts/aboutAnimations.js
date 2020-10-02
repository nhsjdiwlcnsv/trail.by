import React from "react";
import anime from "animejs";


const pageTitleAnimation = () => {

    const aboutRef = React.useRef(null);
    React.useEffect(() => {
        let titleWrapper = document.querySelector('#animated-title, #animated-text');
        titleWrapper.innerHTML = titleWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        aboutRef.current =
            anime.timeline({ loop: false })
                .add({
                    targets: document.querySelectorAll('#animated-title, .letter'),
                    translateX: [-50,0],
                    translateZ: 0,
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 1600,
                    delay: (el, i) => 500 + 30 * i
                })
    }, [])
}

export { pageTitleAnimation }


const projectIntroAnimation = () => {

    const aboutRef = React.useRef(null)
    React.useEffect(() =>{
        aboutRef.current =
            anime.timeline({ loop: false })
                .add({
                    targets: document.querySelectorAll('#animated-text'),
                    translateX: [50,0],
                    translateZ: 0,
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 1800,
                    delay: 600,
                })
    }, [])
}

export { projectIntroAnimation }