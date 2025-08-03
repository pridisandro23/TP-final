import React from "react";
import ContactList from "./ContactList";




const ContactScreen = ({ contactList }) => {
    return (
        <div>
            <h1>Lista de contactos</h1>
            <ContactList contacts={contactList} />
        </div>
    )
}

export default ContactScreen;

