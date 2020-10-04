import React, { useState } from "react";
import palettes from '../constants/colorPalettes'


const switchTheme = () => {
    let [paletteName, setPaletteName] = useState("light");
    return [
        palettes[paletteName],
        () => setPaletteName(paletteName === "light" ? "dark" : "light"),
    ];

}

export default switchTheme