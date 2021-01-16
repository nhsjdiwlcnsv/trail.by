import React from 'react'
import { HiOutlineMoon } from 'react-icons/hi'
import styles from './SwitchThemeButton.module.css'

export default function SwitchThemeButton({ onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            <HiOutlineMoon size="3em" />
        </button>
    )
}
