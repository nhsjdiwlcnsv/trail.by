import React from "react";
import anime from "animejs";


const greetingAndHintAnimation = () => {

    const homeRef = React.useRef(null)
    React.useEffect(() => {

        homeRef.current =
            anime.timeline({ loop: false })
                .add({
                    targets: document.querySelectorAll('.greeting-animated'),
                    translateY: [-50, 0],
                    opacity: [0, 1],
                    duration: 3000,
                    delay: 400,
                })
            anime.timeline({ loop: false })
                .add({
                    targets: document.getElementById('animated-hint'),
                    translateX: [-50, 0],
                    opacity: [0, 1],
                    duration: 3000,
                    delay: 2500,
                })
    }, [])
}

export { greetingAndHintAnimation }


const quickSearchAnimation = () => {

    const homeRef = React.useRef(null)
    React.useEffect(() => {
        homeRef.current =
            anime.timeline({ loop: false })
                .add({
                    targets: document.getElementsByClassName('animated-search1'),
                    translateY: [50, 0],
                    opacity: [0, 1],
                    duration: 3000,
                    delay: 2700,
                })
            anime.timeline({ loop: false })
                .add({
                    targets: document.getElementsByClassName('animated-search2'),
                    translateY: [50, 0],
                    opacity: [0, 1],
                    duration: 3000,
                    delay: 2800,
                })
            anime.timeline({ loop: false })
                .add({
                    targets: document.getElementsByClassName('animated-search3'),
                    translateY: [50, 0],
                    opacity: [0, 1],
                    duration: 3000,
                    delay: 2900,
                })
    }, [])
}

export { quickSearchAnimation }


const latestAnimation = () => {

    const homeRef = React.useRef(null)
    React.useEffect(() => {
        let releaseWrapper = document.querySelector('.latest-title');
        releaseWrapper.innerHTML = releaseWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        homeRef.current =
            anime.timeline({ loop: false })
                .add({
                    targets: document.getElementsByClassName('letter'),
                    translateX: [-50,0],
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 3000,
                    delay: (el, i) => 500 + 200 * i
                })
    }, [])
}

export { latestAnimation }