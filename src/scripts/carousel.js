import React, {useState} from "react";


const carousel = () => {
    let images = [
        '/images/ecotrails/BlueLakes/BlueLakes1.jpg',
        '/images/ecotrails/BlueLakes/BlueLakes2.jpg',
        '/images/ecotrails/BlueLakes/BlueLakes3.jpg',
        '/images/ecotrails/BlueLakes/BlueLakes4.jpg'
    ]
    let [imageIndex, setImageIndex] = useState()

    React.useEffect( () => {
        setTimeout(setImageIndex(imageIndex + 1), 2500)

    }, [])

    return (images[imageIndex])
}


export default carousel