import React from "react";
import anime from "animejs";


const navbarAnimation = () => {

    const navRef = React.useRef(null)
    React.useEffect(() => {
        navRef.current =
            anime.timeline({ loop: false })
                .add({
                    targets: document.getElementsByClassName("nav-item"),
                    translateY: [5, 0],
                    opacity: [0, 1],
                    duration: 1500,
                    delay: (el, i) => i * 200 + 400,
                })
                .add({
                    targets: document.getElementsByClassName("nav-logo"),
                    translateY: [5, 0],
                    opacity: [0, 1],
                    duration: 1500,
                })
    }, [])
}

export default navbarAnimation