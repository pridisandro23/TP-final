import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProfileScreen.css';

const ProfileScreen = ({ contactList }) => {
    const { contactId } = useParams();
    const navigate = useNavigate();

    const contact = contactList.find (c => c.id === Number(contactId) ) ;

    if (!contact) {
        return <div>Contacto no encontrado.</div>;
    }

    return (
        <div className="profile-screen">
            <div className="profile-header">
                <button onClick={() => navigate(-1)} className="back-button">
                    <i className="bi bi-arrow-left"></i>
                </button>
                <h3>Información del contacto</h3>
            </div>
            <div className="profile-content">
                <img src={contact.avatar} alt={contact.name} className="profile-avatar" />
                <div className="profile-details">
                    <p className="profile-name">{contact.name}</p>
                    <p className="profile-status">Última conexión: {contact.lastConnection}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileScreen;