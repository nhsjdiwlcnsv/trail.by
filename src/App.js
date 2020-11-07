import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Trails from './screens/Trails';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Error from './screens/Error';
import Navigation from './navigation/Navigation';
import Trail from "./screens/Trail";
import SwitchThemeButton from "./navigation/SwitchThemeButton";
import switchTheme from '../src/scripts/switchTheme'


const ThemeContext = React.createContext(null);
export { ThemeContext }


let App = () => {

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
            <BrowserRouter>
                <div>
                    <Navigation />
                    <SwitchThemeButton onClick={() => setTheme()}/>
                    <Switch>
                        <Route path="/trails" component={Trails}/>
                        <Route exact path="/ecotrail/:trailName" component={Trail}/>
                        <Route path="/" component={Home} exact/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route component={Error}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </ThemeContext.Provider>
    );
}

export default App;