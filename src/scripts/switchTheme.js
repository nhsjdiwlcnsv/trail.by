import { useState } from "react";
import palettes from'../scripts/constants/colorPalettes'


const switchTheme = () => {
    let [paletteName, setPaletteName] = useState("light");
    return [
        palettes[paletteName],
        () => setPaletteName(paletteName === "light" ? "dark" : "light")
    ];

}

export default switchTheme