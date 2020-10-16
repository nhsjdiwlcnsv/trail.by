import React, { useState } from "react";
import palettes from '../constants/colorPalettes'


const switchTheme = () => {
    let [paletteName, setPaletteName] = useState(localStorage.getItem('currentPalette'));
    React.useEffect(() => {
        localStorage.setItem('currentPalette', paletteName)
    }, [paletteName])
    if (paletteName !== "dark" && paletteName !== "light") {
        setPaletteName('light')
    }
    return [
        palettes[paletteName || "light"],
        () => setPaletteName(paletteName === "light" ? "dark" : "light"),
    ];

}

export default switchTheme