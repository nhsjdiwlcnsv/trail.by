import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../media/logo/Logo.svg'
import LogoBlack from '../media/logo/LogoBlack.svg'
import navbarAnimation from "../scripts/navbarAnimations";
import '../css/Navigation.css'
import { ThemeContext } from "../App";


const Navigation = () => {

    navbarAnimation()

    return (
        <ThemeContext.Consumer>
            {theme =>
                <div className="nav">
                    <div className="item nav-logo">
                        <NavLink to="/">
                            <img className="logo" alt="logo" src={theme.name === "light" ? Logo : LogoBlack}/>
                        </NavLink>
                    </div>
                    <div className="item nav-item first"><NavLink className="link" to="/contact">Contact</NavLink></div>
                    <div className="item nav-item second"><NavLink className="link" to="/about">About us</NavLink></div>
                    <div className="item nav-item third"><NavLink className="link" to="/trails">All trails</NavLink>
                    </div>
                </div>
            }
        </ThemeContext.Consumer>
    );
}

export default Navigation;