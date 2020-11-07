import React from "react";
import anime from "animejs";


const projectIntroAnimation = () => {

    const aboutRef = React.useRef(null)
    React.useEffect(() => {
        let textWrapper = document.querySelector('#animated-text');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='char'>$&</span>");

        aboutRef.current =
            anime.timeline({ loop: false })
                .add({
                    targets: document.querySelectorAll('.firs-img'),
                    scale: [0.5,1],
                    easing: "easeOutExpo",
                    duration: 750,
                })
                .add({
                    targets: document.querySelectorAll('.char'),
                    translateX: [50,0],
                    translateZ: 0,
                    opacity: [0, 1],
                    duration: 500,
                    delay: (el, i) => 250 + 100 * i
                })
    }, [])
}

export { projectIntroAnimation }