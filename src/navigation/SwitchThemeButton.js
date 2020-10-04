import React from "react";
import { HiOutlineMoon } from "react-icons/hi"
import { IconContext } from "react-icons/"
import '../css/SwitchThemeButton.css'


const SwitchThemeButton = props => {
    return (
        <IconContext.Provider value={{className: "moon-outline", size: "3em"}}>
            <button className="switch-button" onClick={props.onClick}><HiOutlineMoon /></button>
        </IconContext.Provider>
    )
}

export default SwitchThemeButton