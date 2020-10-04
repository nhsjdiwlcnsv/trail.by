import React from "react";
import anime from "animejs";


const greetingAndHintAnimation = () => {

    const homeRef = React.useRef(null)
    React.useEffect(() => {
        homeRef.current =
            anime.timeline({ loop: false })
                .add({
                    targets: document.getElementsByClassName('greeting-animated'),
                    translateY: [-50, 0],
                    opacity: [0, 1],
                    duration: 3000,
                    delay: 500,
                })
            anime.timeline({ loop: false })
                .add({
                    targets: document.getElementById('animated-hint'),
                    translateX: [-50, 0],
                    opacity: [0, 1],
                    duration: 3000,
                    delay: 600,
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
                    delay: 800,
                })
            anime.timeline({ loop: false })
                .add({
                    targets: document.getElementsByClassName('animated-search2'),
                    translateY: [50, 0],
                    opacity: [0, 1],
                    duration: 3000,
                    delay: 900,
                })
            anime.timeline({ loop: false })
                .add({
                    targets: document.getElementsByClassName('animated-search3'),
                    translateY: [50, 0],
                    opacity: [0, 1],
                    duration: 3000,
                    delay: 1000,
                })
    }, [])
}

export { quickSearchAnimation }