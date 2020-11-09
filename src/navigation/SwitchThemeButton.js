import React from "react";
import { HiOutlineMoon } from "react-icons/hi"
import { IconContext } from "react-icons/"
import styles from '../css/SwitchThemeButton.module.css'


const SwitchThemeButton = props => {
    return (
        <IconContext.Provider value={{className: "moon-outline", size: "3em"}}>
            <button className={styles.switchButton} onClick={props.onClick}><HiOutlineMoon /></button>
        </IconContext.Provider>
    )
}

export default SwitchThemeButton