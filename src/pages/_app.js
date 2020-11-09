import React from "react";
import switchTheme from "../scripts/switchTheme";
import SwitchThemeButton from "../navigation/SwitchThemeButton";
import Navigation from "../navigation/Navigation";


const ThemeContext = React.createContext(null);
export { ThemeContext }


let MyApp = ({ Component, pageProps }) => {

    const [theme, setTheme] = switchTheme();

    return (
        <ThemeContext.Provider value={theme}>
            <style>
                {
                    `
                    body {
                        --background-image: ${theme.backgroundImage};
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
                    `
                }
            </style>
            <Navigation />
            <Component {...pageProps} />
            <SwitchThemeButton onClick={() => setTheme()}/>

        </ThemeContext.Provider>
    )
}


export default MyApp