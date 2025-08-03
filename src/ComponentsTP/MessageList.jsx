import React from "react";
import Message from "./Message"

const MessageList = ({ className, messages, onDelete }) => {
    return (
    <div className={className}> 
            {messages.map ((message) => (
                <Message
                    key={message.id}
                    id={message.id}
                    emisor= {message.emisor}
                    text= {message.text}
                    time= {message.time}
                    onDelete={onDelete}
                ></Message>
            )
            )}
        </div>
    )
}

export default MessageList