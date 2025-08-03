import React from 'react';
import './WelcomeScreen.css'
const WelcomeScreen = () => {
    return (
        <div className="welcome-screen">
            <div className="welcome-content">
                <img src="/cel.png" alt="Imagen de mensajería" className="welcome-image" />
                <h1>Mensajeria Web</h1>
                <p>Haz clic en un chat para empezar a conversar.</p>
            </div>
        </div>
    );
};

export default WelcomeScreen;