import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ContactScreen from './ComponentsTP/ContactScreen.jsx';
import ChatScreen from './ComponentsTP/ChatScreen.jsx'
import './App.css';
function App() {
    return (
        <div className="app-container">
            <div className="chats-container">
                <ContactScreen />
            </div>
            <div className="messages-area">
            <Routes>
                {/* <Route path='/' element={<ContactScreen/>} /> */}
                <Route path='/contact/:contactId/messages' element={<ChatScreen/>} />
            </Routes>
            </div>
        </div>
    );
}

export default App;
