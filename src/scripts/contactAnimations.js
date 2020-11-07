import React from "react";
import anime from "animejs";


const contactAnimation = () => {
    const contactRef = React.useRef(null)
    React.useEffect(() => {
        let textWrapper = document.querySelector('.slogan');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        contactRef.current =
            anime.timeline({ loop: false })
                .add({
                    targets: document.querySelectorAll('.letter'),
                    translateX: [50,0],
                    translateZ: 0,
                    opacity: [0, 1],
                    duration: 500,
                    delay: (el, i) => 1000 + 100 * i
                })
    }, [])
}


export default contactAnimation
