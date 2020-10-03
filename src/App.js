import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Trails from './screens/Trails';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Error from './screens/Error';
import Navigation from './navigation/Navigation';
import SwitchThemeButton from "./navigation/SwitchThemeButton";
import switchTheme from '../src/scripts/switchTheme'


let App = () => {
    const [theme, setTheme] = switchTheme();
    return (
        <div>
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
                        transition: .3s;    
                        
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
                        <Route path="/" component={Home} exact/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route component={Error}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;