import React, { createContext, useState, useEffect, useContext } from 'react'
import palettes from './constants/colorPalettes'


export const ThemeContext = createContext(null)


export function useThemeSwitcher() {
    let [paletteName, setPaletteName] = useState(
        typeof localStorage == 'undefined'
            ? 'light'
            : localStorage.getItem('currentPalette')
    )

    useEffect(() => {
        localStorage.setItem('currentPalette', paletteName)
    }, [paletteName])

    if (paletteName !== 'dark' && paletteName !== 'light') {
        setPaletteName('light')
    }

    return [
        palettes[paletteName || 'light'],
        () => setPaletteName(paletteName === 'light' ? 'dark' : 'light')
    ]
}

export function ThemeProvider({ children, theme }) {

    return (
        <ThemeContext.Provider value={theme}>
            <style>
                {`
                    body {
                        --background: ${theme.backgroundColor};
                        --text: ${theme.textColor};
                        --text-marked: ${theme.markedTextColor};
                        --text-subtitle: ${theme.subtitleTextColor};
                        --nav-link: ${theme.navLinkColor};
                        --quick-search: ${theme.quickSearchColor};
                        --card: ${theme.cardColor};
                        --button-background: ${theme.buttonBackground};
                        --shadow: ${theme.shadow};
                        transition: .2s;                               
                          
                        background: var(--background);
                    }
                `}
            </style>
            {children}
        </ThemeContext.Provider>
    )
}


export function useTheme() {
    return useContext(ThemeContext)
}
