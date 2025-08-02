import React from "react";
import "./Message.css"

const Message = ({ id, emisor, text, time, onDelete }) => {
    return (
        <div className={emisor === 'YO' ? "message own" : "message"}>
        {emisor !== 'YO' && <h4>{emisor}</h4>}
        <p>{text}</p>
        <span>{time}</span>
        <button onClick={() => onDelete(id)}>Eliminar</button>
        </div>
    );
};

export default Message;