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
        <input className="new-message-input" 
            type="text" 
            placeholder= "Escribí un mensaje..." 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit" className="send-button"> Enviar </button>
    </form>
    );
};

export default NewMessageForm;