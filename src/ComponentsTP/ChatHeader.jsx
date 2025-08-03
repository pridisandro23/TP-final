import React from 'react';
import './ChatHeader.css';
import { useNavigate, useParams } from "react-router-dom";

const ChatHeader = ({ contact }) => {

        const { contactId } = useParams();
    const navigate = useNavigate();

    const handleHeaderClick = () => {
        navigate(`/contact/${contactId}/profile`);
    };


    if (!contact) {
        return (
            <div className="chat-header">
                <p>Selecciona un contacto para comenzar a chatear.</p>
            </div>
        );
    }



    
    return (
        <div className="chat-header">
            <button onClick={() => navigate('/')} className="back-button">
                <i className="bi bi-arrow-left"></i>
            </button>
            <div className="contact-info-header" onClick={handleHeaderClick} style={{ cursor: 'pointer' }}>
                <img src={contact.avatar} alt={contact.name} className="avatar-header" />
                <div className="contact-details-header">
                    <h2 className="contact-name-header">{contact.name}</h2>
                    <p className="last-connection-header">{contact.lastConnection}</p>
                </div>
            </div>
            <div className="chat-header-actions">
                <i className="bi bi-search"></i>
                <i className="bi bi-three-dots-vertical"></i>
            </div>
        </div>
    );
};

export default ChatHeader;