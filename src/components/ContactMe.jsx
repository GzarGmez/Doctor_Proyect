import '../assets/stylesheets/components-styles/ContactMe.css'
import img from '../assets/Images/Doctor-Experience.png'
import ContactContext from '../context/ContactContex';
import { useContext } from 'react';

function ContactMe() {

    const {contact, setContact} = useContext(ContactContext)

    return ( 
        <div className="contact-me">
            <div className="contact-info">
                <h1 className="contact-title">Contáctame</h1>

                <h2 className="info-title">Número Telefónico</h2>
                <span className="contact-content">{contact.phone}</span>

                <h2 className="info-title">Correo Electrónico</h2>
                <span className="contact-content">{contact.email}</span>

            </div>
            <img src={img} alt="The same doctor pointer to something" className="contact-img" />
        </div>
     );
}

export default ContactMe;