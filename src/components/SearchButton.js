import React from 'react'
import Anime from "react-anime";
import styles from "./SearchButton.module.css";
import { HiOutlineSearch } from "react-icons/hi";
import { IconContext } from "react-icons/"


export default function SearchButton({ size, onClick }) {

    return (
        <IconContext.Provider value={{className: styles.searchButton, size: size}}>
            <HiOutlineSearch  onClick={onClick}/>
        </IconContext.Provider>
    )
}
