import GenericTamplate from "../templates/GenericTamplate";
import Contact from "../views/Contact";

function ContactPage() {
    return (
        <GenericTamplate child={<Contact />} />
    );
}

export default ContactPage;