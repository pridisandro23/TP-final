import React, {useState} from "react";
import NewMessageForm from './NewMessageForm'
import { useParams } from "react-router-dom";
import MessageList from "./MessageList";
import initialMessages from "./initialMessages";
import { addNewMessage , deleteMessageById} from "./functionChat";
import './ChatScreen.css'

const ChatScreen = () => {
    const { contactId } = useParams();

    const [messageList, setMessageList] = useState(initialMessages);

    const filteredMessages = messageList.filter(
        message => message.contactId === Number(contactId)
    );

    const handleAddMessage = (newText) => {
        const updatedMessages = addNewMessage(messageList, newText, contactId);
        setMessageList(updatedMessages);
    };

    const handleDeleteMessage = (messageId) => {
        const updatedMessages = deleteMessageById(messageList, messageId);
        setMessageList(updatedMessages);
    };

    return( 
        <div className="chat-screen">
            <MessageList className="chat-MessageList" messages={filteredMessages} onDelete={handleDeleteMessage} />
            <NewMessageForm className="chat-NewMessageForm" onSendMessage={handleAddMessage} />
        </div>
    );
}

export default ChatScreen;