import React from 'react';
import logo from '../media/logo/Logo.svg'
import '../css/Navigation.css'
import { NavLink } from 'react-router-dom';


const Navigation = () => {

    return (
        <div className="nav">
            <div className="item nav-logo"><NavLink to="/"><img className="logo" alt="logo green" src={logo}/></NavLink></div>
            <div className="item nav-item"><NavLink className="link" to="/contact">Contact</NavLink></div>
            <div className="item nav-item"><NavLink className="link" to="/about">About us</NavLink></div>
            <div className="item nav-item"><NavLink className="link" to="/trails">All trails</NavLink></div>
        </div>
    );
}

export default Navigation;