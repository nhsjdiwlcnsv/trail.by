import React from 'react'
import SwitchThemeButton from '../components/navigation/SwitchThemeButton'
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/navigation/Footer'
import { ThemeProvider, useThemeSwitcher } from '../theme.js'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


let MyApp = ({ Component, pageProps }) => {

    const [theme, setTheme] = useThemeSwitcher()

    return (
        <ThemeProvider theme={theme}>
            <Navigation />
            <Component {...pageProps} />
            <SwitchThemeButton onClick={() => setTheme()} />
            <Footer />
        </ThemeProvider>
    )
}

export default MyApp
