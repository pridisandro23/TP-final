import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";



const Contact = ({ id, name, avatar, lastConnection, connectionStatus }) => {

return(
        <Link to={`/contact/${id}/messages`} className="contact-link">
            <div className="contact">
                <div className="avatar-wrapper">
                    <img src={avatar} alt={name} className="avatar" />
                    <span className={`status ${connectionStatus}`}></span>
                </div>
                <div className="contact-info">
                    <h2 className="contact-name">{name}</h2>
                    <p className="last-connection">Última conexión: {lastConnection}</p>
                </div>
            </div>
        </Link>
)
}

export default Contact