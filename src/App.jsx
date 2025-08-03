
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactScreen from './ComponentsTP/ContactScreen.jsx';
import ChatScreen from './ComponentsTP/ChatScreen.jsx';
import WelcomeScreen from './ComponentsTP/WelcomeScreen.jsx';
import ProfileScreen from './ComponentsTP/ProfileScreen.jsx';
import './App.css';

const initialContactList = [
    {
        id: 1,
        name: 'Mateo',
        avatar: 'https://i.pinimg.com/736x/57/96/7b/57967b8930c1ce7f5269370bb3faea67.jpg',
        lastConnection: 'Ahora',
        connectionStatus: 'online'
    },
    {
        id: 2,
        name: 'Matias',
        avatar: 'https://st5.depositphotos.com/88987118/74071/v/450/depositphotos_740719580-stock-illustration-man-professional-business-casual-young.jpg',
        lastConnection: 'Hoy 10:00',
        connectionStatus: 'offline'
    },
    {
        id: 3,
        name: 'Eugenia',
        avatar: 'https://img.freepik.com/vector-premium/icono-perfil-personas_24877-40756.jpg',
        lastConnection: 'Hoy 04:23',
        connectionStatus: 'offline'
    }
];

function App() {
    const [contactList, setContactList] = useState(initialContactList); 

    return (
        <div className="app-container">
            <div className="chats-container">
                <ContactScreen contactList={contactList} />
            </div>
            <div className="messages-area">
                <Routes>
                    <Route path='/' element={<WelcomeScreen />} />
                    <Route path='/contact/:contactId/messages' element={<ChatScreen contactList={contactList} />} />
                    <Route path='/contact/:contactId/profile' element={<ProfileScreen contactList={contactList} />} /> 
                </Routes>
            </div>
        </div>
    );
}

export default App;
