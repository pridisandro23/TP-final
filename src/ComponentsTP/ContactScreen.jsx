import React, {useState} from "react";
import ContactList from "./ContactList";
const ContactScreen = () => {
    const [contactList, setContactList ] = useState ([
    {
        id: 1,
        name: 'Mateo',
        avatar: 'https://i.pinimg.com/736x/57/96/7b/57967b8930c1ce7f5269370bb3faea67.jpg',
        lastConnection: 'Ahora', 
        connectionStatus: 'online'
    }, 
    {
        id: 2,
        name: 'Matias',
        avatar: 'https://st5.depositphotos.com/88987118/74071/v/450/depositphotos_740719580-stock-illustration-man-professional-business-casual-young.jpg',
        lastConnection: 'Hoy 10:00', 
        connectionStatus: 'offline'
    }, 
    {
        id: 3,
        name: 'Eugenia',
        avatar: 'https://img.freepik.com/vector-premium/icono-perfil-personas_24877-40756.jpg',
        lastConnection: 'Hoy 04:23', 
        connectionStatus: 'offline'
    }
])
    return (
        <div>
            <h1>Lista de contactos</h1>
            <ContactList contacts= {contactList} />
        </div>
    )
}
export default ContactScreen

