import React from "react";


export function addNewMessage (messageList, newText, contactId) {
    const newMessage = {
        id: messageList.length + 1,
        contactId: Number(contactId),
        emisor: 'YO',
        time: '11:10',  // más adelante lo hacemos 
        text: newText,
        status: 'no-visto',
    };
    
return [...messageList, newMessage];}

export const deleteMessageById = (messageList, messageId) => {
const newMessageList = [];

for (const message of messageList) {
    if (message.id !== messageId) {
    newMessageList.push(message);
    }
}
return newMessageList;
};