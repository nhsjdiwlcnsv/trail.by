import React from 'react';
import '../css/Home.css';

const home = () => {
    return (
        <div className="containerHome">
            <div className="greeting">
                <p className="greeting-text">Welcome to <span>Trail</span>!</p>
                <div className="hint">
                    <p className="hint-text">Go to:</p>
                </div>
            </div>
        </div>
    );
}

export default home;