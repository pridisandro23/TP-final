import React from "react";
import Contact from "./Contact";

const ContactList = ({ contacts }) => {
    return(
        <div>
            {contacts.map((contact) => {
            return(
                <Contact 
                key={contact.id}
                id={contact.id}
                name={contact.name}
                avatar={contact.avatar}
                lastConnection={contact.lastConnection}
                connectionStatus={contact.connectionStatus}
            />)}
            )
            }
        </div>
    )
}

export default ContactList