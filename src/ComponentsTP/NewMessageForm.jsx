import React, { useState } from "react";
import "./NewMessageForm.css";

const NewMessageForm = ({ onSendMessage }) => {
    const [inputText, setInputText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputText.trim() === "") return;
        onSendMessage(inputText);
        setInputText("");
    };

return (
    <form className="new-message-form" onSubmit={handleSubmit}>
        <button type="button" className="icon-button">
            <i className="bi bi-plus-lg"></i> 
        </button>
        <div className="input-container">
            <button type="button" className="emoji-button">
                <i className="bi bi-emoji-smile"></i> 
            </button>
        <input className="new-message-input" 
            type="text" 
            placeholder= "Escribí un mensaje..." 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
        />
        </div>
        <button type="submit" className="send-button"> 
            <i className="bi bi-send-fill"></i> 
        </button>
    </form>
    );
};

export default NewMessageForm;