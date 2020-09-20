import bluelakesFirst from '../media/images/BlueLakes/BlueLakes1.jpg'
import bluelakesSecond from '../media/images/BlueLakes/BlueLakes2.jpg'
import bluelakesThird from '../media/images/BlueLakes/BlueLakes3.jpg'
import bluelakesFourth from '../media/images/BlueLakes/BlueLakes4.jpg'

let n = 0;
let images = [];

images[0] = bluelakesFirst
images[1] = bluelakesSecond
images[2] = bluelakesThird
images[3] = bluelakesFourth

let switchImage = () => {
    if (document.getElementById('slide') !== null) {
        document.getElementById('slide').src = images[n]
    }

    if (n < images.length - 1) {
        n++;
    } else {
        n = 0;
    }

    setTimeout(switchImage, 3000);
}

window.onload = switchImage