import React, {useState} from "react";
import anime from "animejs";


const navbarAnimation = () => {

    const navRef = React.useRef(null)
    let [animationPassed, setIsPassed] = useState(typeof localStorage == "undefined" ? false : sessionStorage.getItem('animationPassed'));
    React.useEffect(() => {

        if (!sessionStorage.getItem('animationPassed')) {
            navRef.current =
                anime.timeline({ loop: false })
                    .add({
                        targets: document.querySelectorAll("#nav-item"),
                        translateY: [-15, 0],
                        opacity: [0, 1],
                        duration: 1500,
                        delay: (el, i) => i * 200 + 2100,
                    })
                    .add({
                        targets: document.querySelectorAll("#nav-logo"),
                        translateY: [-15, 0],
                        opacity: [0, 1],
                        easing: 'easeOutExpo',
                        duration: 1500,
                    })
            setIsPassed(!animationPassed)
            sessionStorage.setItem('animationPassed', animationPassed)
        }
    }, [])
}

export default navbarAnimation