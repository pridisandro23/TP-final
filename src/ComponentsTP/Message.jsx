import React from "react";
import "./Message.css"

const Message = ({ id, emisor, text, time, onDelete }) => {
    return (
        <div className={emisor === 'YO' ? "message own" : "message"}>
        
        <p>{text}</p>
        <span className="message-time">{time}</span>
        <button className="delete-button" onClick={() => onDelete(id)}>
            <i className="bi bi-trash"></i>
        </button>
        </div>
    );
};

export default Message;