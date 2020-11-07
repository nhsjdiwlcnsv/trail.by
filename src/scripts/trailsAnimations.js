import React from "react";
import anime from "animejs";


const trailsAnimation = () => {

    const trailsRef = React.useRef(null)
    React.useEffect(() => {
        trailsRef.current =
            anime.timeline({loop: false})
                .add({
                    targets: document.getElementsByClassName('search'),
                    width: '45%',
                    easing: 'easeOutExpo',
                    duration: 1500
                })
                .add({
                    targets: document.getElementsByClassName('search-outline'),
                    opacity: [0, 1],
                    delay: 75,
                    duration: 3000
                })
    }, [])
}

export default trailsAnimation